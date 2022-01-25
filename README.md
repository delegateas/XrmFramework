# XrmFramework [![Join the chat at https://gitter.im/delegateas/XrmFramework](https://badges.gitter.im/delegateas/XrmFramework.svg)](https://gitter.im/delegateas/XrmFramework?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
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
There is a renaming script file at the root. Ensure you have F# installed, open a command prompt, navigate to project folder and type 
```
rename.cmd comp=Company org=Organization sol=Solution
``` 
where Company is the name of your company, Organization is the name of your organization and Solution is the name of the solution you want to sync your project with. This will replace all occurrences of `DG` with your company, `XrmOrg` with your organization and `XrmSolution` with your solution.

The rename.cmd looks for your fsi.exe and fsianycpu.exe in several different locations, as both your visual studio version and edition can impact the default location.:
```
C:\Program Files (x86)\Microsoft Visual Studio\<2017|2019>\<Enterprise|Professional|Community>\Common7\IDE\CommonExtensions\Microsoft\FSharp
```

Newer versions of VS have placed the fsi.exe and fsianycpu.exe in:
```
C:\Program Files (x86)\Microsoft Visual Studio\2019\<Enterprise|Professional|Community>\Common7\IDE\CommonExtensions\Microsoft\FSharp\Tools
```

Lastly, Visual studio 2022 seems to have moved the installation path to C:\Program Files (ie. no `(x86)`). Thus, it also looks in:
```
C:\Program Files\Microsoft Visual Studio\2022\<Enterprise|Professional|Community>\Common7\IDE\CommonExtensions\Microsoft\FSharp\Tools
```

If the above mentioned folders does not apply to your setup, you can manually change the path in `rename.cmd` by opening it with your editor.

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

## Troubleshoot
There is a know problem when using a new device setup with Microsoft Intune(and maybe others) where `special charecters` in the Windows`User profile name` causes issues.

This unsupported workaround can currently be used to fix the problem.

```
1. Open CMD as admin

2. Change dir to C:/Users

3. Run MKLINK /J NEW_USERNAME OLD_USERNAME
This creates a symlink between the real user folder and a new one without special characters

4. Change the environment variables "Path", "TEMP" and "TMP" to use the new folder

5. Change to the new path for your user at HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList in the Registry Editor

This will change the %USERPROFILE% variable to the new folder name and this is great for future installations. 
Since some programs will create a path in the environment variable PATH based on this. 
This way you don't have to change it manually to the new folder name after the installation.

6. Reboot PC
```
