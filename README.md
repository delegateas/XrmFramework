# XrmFramework
XrmFramework is a project that contains the structure Delegate uses for every XRM project. It has all of our tools and shows how we use our tools together to create a better experience for developers.

## Solution structure
The solution contains the following projects

* **BusinessDomain** contains the generated context from XrmContext.
* **BusinessLogic** contains the businesslogic that is being called by the plugins. These use the context from Businessdomain.
* **Plugins** contains the definition of all plugins. These are registered using DAXIF.
* **Tests** contains test definitions. All the tests use XrmMockup in order to simulate an XRM instance.
* **Tools** contains the result of installing Daxif, XrmContext and XrmDefinitelyTyped.
* **WebResources** contains webresource definitions. Client-side logic is written using Typescript and XrmDefinitelyTyped.
* **Workflow** contains CodeActivity definitions. These use the context from Businessdomain.

## Renaming the framework
There is a renaming script file at the root. Ensure you have F# installed, open a command prompt and type 
```
rename.cmd org=Organization sol=Solution
``` 
where Organization is the name of your organization and Solution is the name of the solution you want sync your project with. This will replace all occurrences of `XrmOrg` with your organization and `XrmSolution` with your solution.

## Configuring DAXIF
The final configuration is done inside `Tools > Daxif > _Config.fsx`. You will see definitions like this.

```fsharp
  let dev = 
    Environment.Create(
      name = "Development",
      url = "https://mydev.crm4.dynamics.com/XRMServices/2011/Organization.svc",
      ap = AuthenticationProviderType.OnlineFederation,
      creds = creds,
      args = fsi.CommandLineArgs
    )
```

Replace the details of the environment as needed. Do the same for each environment you have. We have dev, test, and prod by default. 

Go down to `PublisherInfo` and modify the information. Notice that if you modify the prefix you must also modify the prefix of the folder in `WebResources > src > dg_xxx`, since it is used to mark the webresource folder for DAXIF WebResourceSync.

## Ready
If you have done the above, then you are ready to start the development of your project. Build in release and sync your local files!
