namespace DG.XrmOrg.XrmSolution.ConsoleJobs.Jobs
{
    internal interface IJob
    {
        void Run(EnvironmentConfig env);
    }
}
