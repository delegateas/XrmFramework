# ConsoleJobs
ConsoleJobs is a framework that streamlines the development of jobs/scripts that run against D365 using self-contained, single-configured jobs with CSV read/write capability.

## Features
- **Self-contained jobs.** You write the entirety of your ConsoleJob in one file.
- **Centralized configuration.** All necessary configuration is in App.config.
- **Methods for reading and writing to CSV files.** Generic read and write methods are provided with minimal per-job setup.

## Configuration
In App.config, define the following parameters:

`Environment` The environment to run your ConsoleJob against.

`JobClassName` The full name of the ConsoleJob to run.

`ClientId` The client ID of your D365 tenant.

`ClientSecret` The client secret of your D365 tenant.

`DevEnv`, `TestEnv`, `ProdEnv`: URLs of your Dev, Test, and Prod environments.

`CsvSeparator` Separator to used for CSV files. Configured here for convenience, due to Excel's regional differences.

## Usage
Create your job as a class implementing the `IJob` interface in the /Jobs directory. Set the `ConsoleJobs` project as your startup project, make sure `JobClassName` and `Environment` are set correctly in App.config and run.

### Adding Additional Environments
To add additional environments, create an entry in App.config for it in the same fashion as the other environments, expand the `EnvironmentsEnum` and `GetUrlFromEnvironment()` in `EnvironmentConfig.cs` to include your new environment.

## CsvContainer
`CsvContainer` is a class which exposes methods for reading and writing data to and from CSV files.

To create an instance of a CsvContainer, define a struct which represents the data in your CSV files and pass it as a type-argument, as well as an instance of your struct as a parameter:
```cs
struct Attributes
{
    public string Name;
}
var myCsvContainer = new CsvContainer<Attributes>(new Attributes { Name = "John Doe" });
```

### Reading CSV Files
We read CSV files using the static `ReadFromCsv(string csvFilePath)`.

To read a CSV file, define a struct which corresponds to the columns of your CSV file:
```cs
struct Attributes
{
    public string Name;
    public int Id;
    public string Address;
}
```
We can then read our file, using `ReadFromCsv`:
```cs
var csvPath = "C:\Work\Contacts.csv";
var people = CsvContainer<Attributes>.ReadFromCsv(csvPath);
```

### Writing CSV Files
The List extension-method `PrintToCsv(string csvFilePath)` writes to CSV files:

```cs
struct Attributes
{
    public string Name;
    public int Id;
    public string Address;
}
var csvPath = "C:\Work\Contacts.csv";

var people = new List<CsvContainer<Attributes>>();
people.Add(new CsvContainer<Attributes>(
        new Attributes{
            Name = "John",
            Id = 1,
            Address = "Example Street 3"
        }));


people.PrintToCsv(newCsvPath);
```

`PrintToCsv()` will create the file if it does not exist and overwrite it if it does. You can provide an optional boolean parameter, if it should append rather than overwrite:
```cs
morePeople = new List<CsvContainer<Attributes>>();
morePeople.Add(new CsvContainer<Attributes>(
        new Attributes{
            Name = "Jane",
            Id = 2,
            Address = "Example Street 8"
        }));
morePeople.PrintToCSV(newCsvPath, true);
```