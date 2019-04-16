// -------------------------------------------------------------------------------
// Initial rename of library and project script
// -------------------------------------------------------------------------------

// Bind operator
let (>>=) m f = Option.bind f m

// Append to strings separated by a dot
let (+.) a b = a + "." + b

// Args function that parses command line arguments
let getArg argv key =
  let arg = Array.tryFind(fun (a:string) -> a.StartsWith(key)) argv
  match arg with
  | Some x -> x.Replace(key, "") |> Some
  | None -> None

// Thread-safe console logger
let ts () = System.DateTime.Now.ToString("o")           // ISO-8601
let cw (s:string) = System.Console.WriteLine(s)         // Threadsafe console writer
let cew (s:string) = System.Console.Error.WriteLine(s)  // Threadsafe console error writer
type LogLevel = Info | Warning | Error
let log level x y =
  let msg = sprintf "%s - %A: %A (%A)" (ts()) level x y
  match level with
  | LogLevel.Error -> cew msg
  | LogLevel.Info | LogLevel.Warning -> cw msg

// Generic process executer (needed for "tf rename source target")
let executeProcess exe args dir =
  try
    let psi = new System.Diagnostics.ProcessStartInfo(exe,args)
    psi.CreateNoWindow <- true        
    psi.UseShellExecute <- false
    psi.RedirectStandardOutput <- true
    psi.RedirectStandardError <- true
    psi.WorkingDirectory <- dir
    let p = System.Diagnostics.Process.Start(psi)
    let o = new System.Text.StringBuilder()
    let e = new System.Text.StringBuilder()
    p.OutputDataReceived.Add(fun x -> o.AppendLine(x.Data) |> ignore)
    p.ErrorDataReceived.Add(fun x -> e.AppendLine(x.Data) |> ignore)
    p.BeginErrorReadLine()
    p.BeginOutputReadLine()
    p.WaitForExit()
    (p.ExitCode, o.ToString(), e.ToString()) |> Some
  with ex -> log LogLevel.Error (exe,args,dir) ex; None

// Organization and Solution
let company          = "DG"
let organizationName = "XrmOrg"
let solutionName     = "XrmSolution"
let organization     = company +. organizationName
let solution         = organization +. solutionName

// The name of the library (will replace "XrmOrg")
let orgName = 
  ((fsi.CommandLineArgs,"org=") ||> getArg, "Organization")
  ||> defaultArg

// The name of the project (will replace "XrmSolution")
let solName =
  ((fsi.CommandLineArgs,"sol=") ||> getArg, "Solution")
  ||> defaultArg

// The name of the library (will replace "DG.XrmOrg")
let org = company +. orgName

// The name of the project (will replace "DG.XrmOrg.XrmSolution")
let sol = org +. solName

// Folder & file helper functions
let root = __SOURCE_DIRECTORY__
let recursively = System.IO.SearchOption.AllDirectories
let pattern filter = "*" + filter + "*"
let pattern' filter = "*" + filter
let dirs path filter =
  System.IO.Directory.EnumerateDirectories(path,filter,recursively)
let files path filter =
  System.IO.Directory.EnumerateFiles(path,filter,recursively)
let rev (s:string) =
  s |> Seq.toArray |> Array.fold(fun a x -> (x |> string) + a) ""
let replaceFirst input from to' =
  let r = new System.Text.RegularExpressions.Regex(from)
  r.Replace(input = input,replacement = to', count = 1)
let renameDirs path path' =
  System.IO.Directory.Move(path,path') |> ignore
  (0,"","") |> Some,path,path'
let renameFiles path path' =
  System.IO.File.Move(path,path') |> ignore
  (0,"","") |> Some,path,path'
let rename' path path' =
  match System.IO.File.GetAttributes(path) with
  | System.IO.FileAttributes.Directory -> (path, path') ||> renameDirs 
  | _ -> (path,path') ||> renameFiles
let rename (path:string) from to' =
  let from' = from  |> rev
  let to''  = to'   |> rev
  let path' = (path |> rev, from', to'') |||> replaceFirst |> rev
  (path,path') ||> rename'
let rollback _ = () // Do manually with "git checkout -- *"

// File content helper functions
let utf8 = System.Text.UTF8Encoding.UTF8
let readLines path = System.IO.File.ReadLines(path,utf8)
let writeLines path (contents:string seq)  =
  System.IO.File.WriteAllLines(path,contents,utf8)
let copy from to' = System.IO.File.Copy(from,to',true)
let delete path = System.IO.File.Delete(path)
let extensions = [ ".crmregister"; ".cs"; ".csproj"; ".fsx"; 
                   ".js"; ".md"; ".sln"; ".vspscc"; ".xml"; ]

// Rename files or directories
let renameIO from to' fn atomic' =
  try
      (root,from |> pattern) ||> fn
      |> Seq.map(fun x -> (x,from,to') |||> rename)
      |> Seq.fold(fun (i,acc) (x,y,z) ->
                  let i' =
                    match x with
                    | Some (a,b,c) -> a
                    | None -> 1
                  (i+i',(y,z)::acc)) (0,[])
      |> fun (x,y) ->
        match x with
        | 0 -> (y,atomic') ||> List.append |> Some
        | _ -> atomic' |> rollback |> ignore; None
  with ex -> log LogLevel.Error (atomic',from,to') ex; None

// Update files content
let updateContent exts atomic' =
  try
    exts
    |> Seq.map(fun x -> (root,x |> pattern') ||> files)
    |> Seq.fold(fun a x -> (x,a) ||> Seq.append) Seq.empty
    |> Seq.filter(fun x -> not (x.Contains "rename."))
    |> Seq.fold(fun a x ->
                let x' = x + "_"
                x |> readLines
                  |> Seq.map(fun y -> y.Replace(solution,sol)
                                       .Replace(organization,org)
                                       .Replace(solutionName,solName)
                                       .Replace(organizationName,orgName))
                  |> writeLines x'
                (x,x')::a) []
    |> List.toSeq
    |> Seq.iter(fun (x,y) -> (y,x) ||> copy; y |> delete)
    |> Some
  with ex ->
    let tf' = atomic' |> rollback
    log LogLevel.Error (exts,tf') ex; None

// Rename with atomicity "tf rename folder1 folder2 / tf undo ."
[] |> Some >>= (renameIO solution sol dirs)
           >>= (renameIO organization org dirs)
           >>= (renameIO solutionName solName dirs)
           >>= (renameIO organizationName orgName dirs)

// Rename with atomicity "tf rename file1 file2 / tf undo ."
           >>= (renameIO solution sol files)
           >>= (renameIO organization org files)
           >>= (renameIO solutionName solName files)
           >>= (renameIO organizationName orgName files)

// Update content with atomicity "tf undo ."
           >>= (updateContent extensions)