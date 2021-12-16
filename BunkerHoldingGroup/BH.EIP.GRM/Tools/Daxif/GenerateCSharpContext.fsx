(**
SolutionUpdateCustomContext
*)

#load @"_Config.fsx"
open _Config
open DG.Daxif
open DG.Daxif.Common.Utility

let xrmContext = Path.toolsFolder ++ @"XrmContext\XrmContext.exe"
let businessDomain = Path.solutionRoot ++ @"BusinessDomain"

Solution.GenerateCSharpContext(Env.dev, xrmContext, businessDomain,
  solutions = [
    SolutionInfo.name
    ],
  entities = [
      "savedquery"
      "account"
      "task"
    ],
  extraArguments = [
    "deprecatedprefix", "ZZ_"
    "labelMappings", "\u2714\uFE0F: checkmark, \u26D4\uFE0F: stopsign"
    ])
    
let xrmMockupMetadataGen = Path.metdataFolder ++ "MetadataGenerator365.exe"
Solution.GenerateXrmMockupMetadata(Env.dev, xrmMockupMetadataGen, Path.metdataFolder,
  solutions = [
    SolutionInfo.name
  ],
  entities = [
      "savedquery"
      "task"
      "account"
      "team"
    ],
  extraArguments = [
    ]
)
