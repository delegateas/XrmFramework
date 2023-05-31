using DG.XrmOrg.XrmSolution.ConsoleJobs.Jobs;
using System;
using System.Configuration;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs
{
    internal static class Program
    {
        static void Main(string[] args)
        {
            var env = GetEnviromentFromConfig();
            IJob job = GetJobFromConfiguration(); //Used to get the job from the app config file
            ExecuteJobOnEnvironment(env, job);
        }

        /// <summary>
        /// Gets the enviroment from app config.
        /// </summary>
        /// <returns></returns>
        private static EnvironmentEnum GetEnviromentFromConfig()
        {
            EnvironmentEnum result;
            var envStr = ConfigurationManager.AppSettings["Environment"];
            if (string.IsNullOrWhiteSpace(envStr) || !Enum.TryParse(envStr, out result))
            {
                throw new ConfigurationErrorsException("Environment not specified in App.config or could not be parsed as EnvironmentEnum");
            }
            return result;
        }

        /// <summary>
        /// Creates an instance of the IJob given the classname.
        /// </summary>
        /// <returns></returns>
        private static IJob GetJobFromConfiguration()
        {
            var envStr = ConfigurationManager.AppSettings["JobClassName"];
            if (string.IsNullOrWhiteSpace(envStr))
            {
                throw new ConfigurationErrorsException("JobClassName not specified in App.config");
            }
            Type t = Type.GetType(envStr);
            return (IJob)Activator.CreateInstance(t);
        }
        /// <summary>
        /// Creates a connection to CRM by getting the clientid and secret from the app config.
        /// </summary>
        /// <param name="env"></param>
        /// <returns></returns>
        private static EnvironmentConfig GetEnv(EnvironmentEnum env)
        {
            var clientId = ConfigurationManager.AppSettings["ClientId"];
            if (string.IsNullOrWhiteSpace(clientId))
            {
                throw new ConfigurationErrorsException("ClientId not specified in App.config");
            }

            var secret = ConfigurationManager.AppSettings["ClientSecret"];
            if (string.IsNullOrWhiteSpace(secret))
            {
                throw new ConfigurationErrorsException("ClientSecret not specified in App.config");
            }

            var newEnv = EnvironmentConfig.Create(env, clientId, secret);
            return newEnv;
        }

        /// <summary>
        /// Executes the job on the specified environment
        /// </summary>
        /// <param name="env">The environment the job should be executed on</param>
        /// <param name="job">The job to execute</param>
        private static void ExecuteJobOnEnvironment(EnvironmentEnum env, IJob job)
        {
            Console.WriteLine($"You are attempting to run {job.GetType().Name} on {env}.\nPress 'Y' to continue...");
            var keyPressed = Console.ReadKey();
            if (keyPressed.Key != ConsoleKey.Y)
            {
                Console.WriteLine("Aborted by user.\nExiting...");
                return;
            }
            var environment = GetEnv(env);
            try
            {
                job.Run(environment);
            } 
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            Console.WriteLine("Program finished.\nPress any key to continue...");
            Console.ReadKey();
        }
    }
}
