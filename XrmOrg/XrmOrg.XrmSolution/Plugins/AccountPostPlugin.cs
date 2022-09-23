using System;
using System.ServiceModel;

using Microsoft.Xrm.Sdk;

using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmFramework.BusinessLogic.Managers;
using HU = DG.XrmFramework.BusinessLogic.Helpers.HelperUtils;

namespace DG.XrmOrg.XrmSolution.Plugins {

    public class AccountPostPlugin : Plugin {
        public AccountPostPlugin()
            : base(typeof(AccountPostPlugin))
        {
            RegisterPluginStep<Account>(
                EventOperation.Update,
                ExecutionStage.PostOperation,
                ExecuteAccountPostPlugin);
        }

        protected void ExecuteAccountPostPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
            {
                throw new ArgumentNullException("localContext");
            }

            var isUpdate = MatchesEventOperation(localContext, EventOperation.Update);

            var accountManager = new ManagerAccount(
                localContext.TracingService,
                localContext.PluginExecutionContext,
                localContext.OrganizationService,
                localContext.OrganizationAdminService);

            accountManager.FooPlugin(localContext.PluginExecutionContext.PrimaryEntityId, isUpdate);
        }
    }
}
