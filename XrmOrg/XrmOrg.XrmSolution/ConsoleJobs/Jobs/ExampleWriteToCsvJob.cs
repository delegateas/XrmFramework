using System;
using System.Linq;
using System.IO;
using DG.XrmOrg.XrmSolution.ConsoleJobs.Containers;
using DG.XrmOrg.XrmSolution.ConsoleJobs.Helpers;
using DG.XrmFramework.BusinessDomain.ServiceContext;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs.Jobs
{
    internal class ExampleWriteToCsvJob : IJob
    {
        //A path to our desired CSV file
        private readonly string csvFilePath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "csvFile.csv");
        //The data our job will write to the CSV file
        struct Attributes
        {
            public string AccountName;
            public Guid Id;
            public string Address;
        }
        public void Run(EnvironmentConfig env)
        {
            using (var ctx = new Xrm(env.Service))
            {
                //We make some query towards CRM and project the result into a list of CsvContainers 
                var entities = ctx.AccountSet
                    .Where(x => x.CreatedOn > DateTime.Now.AddYears(-3))
                    .Select(x =>
                        new CsvContainer<Attributes>(
                            new Attributes()
                            {
                                AccountName = x.Name,
                                Id = x.Id,
                                Address = x.Address1_Line1
                            }))
                    .ToList();
                //We print our list of CsvContainers to the CSV file
                entities.PrintToCsv(csvFilePath);
            }
        }
    }
}
