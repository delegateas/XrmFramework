﻿using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmFramework.BusinessLogic.Managers;
using System.Linq;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs.Jobs
{
    internal class ExampleInvokeManagerJob : IJob
    {
        public void Run(EnvironmentConfig env)
        {
            using (var ctx = new Xrm(env.Service))
            {
                var account = ctx.AccountSet.FirstOrDefault();

                var accountManager = new ManagerAccount(env.Tracing, env.Service, env.Service);
                accountManager.BarWorkflow(account.Id);
            }

        }
    }
}
