(**
Sets up all the necessary variables and functions to be used for the other scripts. 
*)
#r @"bin\Microsoft.Xrm.Sdk.dll"
#r @"bin\Microsoft.Crm.Sdk.Proxy.dll"
#r @"bin\Microsoft.IdentityModel.Clients.ActiveDirectory.dll"
#r @"bin\Microsoft.Xrm.Tooling.Connector.dll"
#r @"bin\Delegate.Daxif.dll"
open System
open Microsoft.Xrm.Sdk.Client
open DG.Daxif
open DG.Daxif.Common.Utility
  
// Prompts the developer for a username and password the first time a script is run.
// It then stores these credentials in a local .daxif-file.
let creds = Credentials.FromKey("UserCreds")

// If you want to store login credentials directly in code, instead of in a local file, 
// replace the above line with the following
//let creds = Credentials.Create("usr", "pwd")

module Env =

  //let dev = 
  //    Environment.Create(
  //      name = "Development",
  //      url = "https://grm-sales-dev.crm4.dynamics.com/XRMServices/2011/Organization.svc",
  //      creds = creds,
  //      method = ConnectionType.OAuth,
  //      ap = AuthenticationProviderType.OnlineFederation,
  //      mfaAppId = "7e3d08aa-3a76-4f55-9994-babd3067aeb0",
  //      mfaReturnUrl = "https://login.microsoftonline.com/common/oauth2/nativeclient",
  //      args = fsi.CommandLineArgs
  //    )

  let dev = 
      Environment.Create(
        name = "Development",
        url = "https://grm-sales-dev.crm4.dynamics.com/XRMServices/2011/Organization.svc",
        creds = creds,
        method = ConnectionType.ClientSecret,
        mfaClientSecret = "qjV`vm2stXPzfaJ6k&3.Q>Zg4NiRTKI9c5" , // Insert client secret here  - do not include in repo
        mfaAppId = "7e3d08aa-3a76-4f55-9994-babd3067aeb0",
        mfaReturnUrl = "https://login.microsoftonline.com/common/oauth2/nativeclient",
        args = fsi.CommandLineArgs
      )
  
  let test = 
    Environment.Create(
      name = "Test",
      url = "https://grm-sales-test.crm4.dynamics.com/XRMServices/2011/Organization.svc",
      ap = AuthenticationProviderType.OnlineFederation,
      creds = creds,
      mfaReturnUrl = "https://login.microsoftonline.com/common/oauth2/nativeclient",
      args = fsi.CommandLineArgs
    )

  let prod = 
    Environment.Create(
      name = "Production",
      url = "https://grm-sales.crm4.dynamics.com/XRMServices/2011/Organization.svc",
      ap = AuthenticationProviderType.OnlineFederation,
      creds = creds,
      mfaReturnUrl = "https://login.microsoftonline.com/common/oauth2/nativeclient",
      args = fsi.CommandLineArgs
    )


(** 
CRM Solution Setup 
------------------
*)
module SolutionInfo =
  let name = @"GRM"
  let displayName = @"GRM"

module PublisherInfo =
  let prefix = @"grm"
  let name = @"globalriskmanagement"
  let displayName = @"Global Risk Management"


(** 
Path and project setup 
----------------------
*)
Environment.CurrentDirectory <- __SOURCE_DIRECTORY__

module Path =
  let daxifRoot = __SOURCE_DIRECTORY__
  let solutionRoot = daxifRoot ++ @"..\.."
  let toolsFolder = daxifRoot ++ @".."
  
  let webResourceProject = solutionRoot ++ @"WebResources"
  let webResourceFolder = 
    webResourceProject ++ @"src" ++ (sprintf "%s_%s" PublisherInfo.prefix SolutionInfo.name)
  
  let testProject = solutionRoot ++ @"Tests"
  let metdataFolder = testProject ++ @"Metadata"

  /// Path information used by the SolutionPackager scripts
  module SolutionPack =
    let projName = "SolutionBlueprint"
    let projFolder = solutionRoot ++ projName
    let xmlMappingFile = projFolder ++ (sprintf "%s.xml" SolutionInfo.name)
    let customizationsFolder = projFolder ++ @"customizations"
    let projFile = projFolder ++ (sprintf @"%s.csproj" projName)

  /// Paths Daxif uses to store/load files
  module Daxif =
    let crmSolutionsFolder = daxifRoot ++ "solutions"
    let unmanagedSolution = crmSolutionsFolder ++ (sprintf "%s.zip" SolutionInfo.name)
    let managedSolution = crmSolutionsFolder ++ (sprintf "%s_managed.zip" SolutionInfo.name)

    let translationsFolder = daxifRoot ++ "translations"
    let metadataFolder = daxifRoot ++ "metadata"
    let dataFolder = daxifRoot ++ "data"
    let stateFolder = daxifRoot ++ "state"
    let associationsFolder = daxifRoot ++ "associations"
    let mappingFolder = daxifRoot ++ "mapping"
    let importedFolder = daxifRoot ++ "imported"
  
