using DG.XrmOrg.XrmSolution.ConsoleJobs.Jobs;
using System;
using System.Configuration;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var env = GetEnviromentFromConfig(EnviromentEnum.Dev);
            IJob job = GetJobFromConfiguration(); //Used to get the job from the app config file
            //IJob job = new ExampleJob(); //Used if we want to manully specific the job.
            ExecuteJobOnEnvironment(env, job);
        }

        /// <summary>
        /// Gets the enviroment from app config. If non is found, the fallback enviroment is used.
        /// </summary>
        /// <param name="fallback"></param>
        /// <returns></returns>
        private static EnviromentEnum GetEnviromentFromConfig(EnviromentEnum fallback)
        {
            EnviromentEnum result;
            var envStr = ConfigurationManager.AppSettings["Enviroment"];
            if (string.IsNullOrWhiteSpace(envStr) || !Enum.TryParse(envStr, out result))
            {
                Console.WriteLine($"Fallback enviroment {fallback} is used.");
                result = fallback;
            }
            return result;
        }

        /// <summary>
        /// Creates an instance of the IJob given the classname.
        /// First the function attempts to find the class name from the console
        /// Then if non is found, it promts the user.
        /// </summary>
        /// <returns></returns>
        private static IJob GetJobFromConfiguration()
        {
            var envStr = ConfigurationManager.AppSettings["JobClassName"];
            if (string.IsNullOrWhiteSpace(envStr))
            {
                Console.WriteLine("Enter full classname of job to run");
                envStr = Console.ReadLine();
            }
            Type t = Type.GetType(envStr);
            return (IJob)Activator.CreateInstance(t);
        }
        /// <summary>
        /// Creates a connection to CRM by getting the clientid and secret from the app config.
        /// If non is found the users is asked to provide.
        /// </summary>
        /// <param name="env"></param>
        /// <returns></returns>
        private static EnvironmentConfig GetEnv(EnviromentEnum env)
        {
            var clientId = ConfigurationManager.AppSettings["ClientId"];
            if (string.IsNullOrWhiteSpace(clientId))
            {
                Console.WriteLine("Enter clientid for new crm service account");
                clientId = Console.ReadLine();
            }

            var secret = ConfigurationManager.AppSettings["ClientSecret"];
            if (string.IsNullOrWhiteSpace(secret))
            {
                Console.WriteLine("Enter clientid for new crm service account");
                secret = Console.ReadLine();
            }

            var newEnv = EnvironmentConfig.Create(env, clientId, secret);
            return newEnv;
        }

        /// <summary>
        /// Executes the job on the specified environment
        /// </summary>
        /// <param name="env">The environment the job should be executed on</param>
        /// <param name="job">The job to execute</param>
        private static void ExecuteJobOnEnvironment(EnviromentEnum env, IJob job)
        {
            var environment = GetEnv(env);
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
