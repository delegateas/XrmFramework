using DG.XrmOrg.XrmSolution.ConsoleJobs.Jobs;
using System;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IJob job = new ExampleJob();
            ExecuteJobOnEnvironment(EnvironmentEnum.Dev, job); //Remember to specify environment
        }

        /// <summary>
        /// Executes the job on the specified environment
        /// </summary>
        /// <param name="env">The environment the job should be executed on</param>
        /// <param name="job">The job to execute</param>
        private static void ExecuteJobOnEnvironment(EnvironmentEnum env, IJob job)
        {
            Console.WriteLine("Client id to service account:");
            var clientId = Console.ReadLine();
            Console.WriteLine("Secret to service account:");
            var secret = Console.ReadLine();

            var environment = Environment.Create(env, clientId, secret);
            try
            {
                job.Run(environment);
            } 
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            Console.WriteLine("Jobs done!");
            Console.ReadKey();
        }
    }
}
