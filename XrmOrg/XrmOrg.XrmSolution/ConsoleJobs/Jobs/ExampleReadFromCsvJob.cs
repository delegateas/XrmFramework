using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmOrg.XrmSolution.ConsoleJobs.Containers;
using System;
using System.IO;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs.Jobs
{
    internal class ExampleReadFromCsvJob : IJob
    {
        //A path to our desired CSV file
        private readonly string csvFilePath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "csvFile.csv");
        //The data our job will read from the CSV file (in this case we expect our file to have 1 column which can be parsed as a Guid)
        struct Attributes
        {
            public Guid Id;
        }
        public void Run(EnvironmentConfig env)
        {
            //Read the entities from our CSV file, which matches the format of our Attributes struct
            var entitiesFromCSV = CsvContainer<Attributes>.ReadFromCsv(csvFilePath);

            var current = 0;
            var count = entitiesFromCSV.Count;
            foreach (var entity in entitiesFromCSV)
            {
                //Print out a progress indicator every 100 entities
                if (current % 100 == 0)
                {
                    env.Tracing.Trace($"Progress: {current}/{count}");
                }

                //Make some update on the entity
                var updEntity = new Account()
                {
                    Id = entity.Id,
                    StatusCode = Account_StatusCode.Somestatus
                };
                env.Service.Update(updEntity);
                current++;
            }
            env.Tracing.Trace($"Progress: {current}/{count}");
        }
    }
}
