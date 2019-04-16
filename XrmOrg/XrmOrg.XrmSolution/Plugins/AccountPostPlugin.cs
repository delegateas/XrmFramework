
namespace DG.XrmOrg.XrmSolution.Plugins
{
    using System;
    using System.ServiceModel;
    using Microsoft.Xrm.Sdk;

    using DG.XrmFramework.BusinessDomain.ServiceContext;
    using DG.XrmFramework.BusinessLogic.Managers;
    using HU = DG.XrmFramework.BusinessLogic.Helpers.HelperUtils;

    public class AccountPostPlugin : Plugin
    {
        public AccountPostPlugin()
            : base(typeof(AccountPostPlugin))
        {
            RegisterPluginStep<Account>(
                EventOperation.Update, 
                ExecutionStage.PostOperation, 
                ExecuteAccountPostPlugin);
        }

        /// <summary>
        /// Executes the plug-in.
        /// </summary>
        /// <param name="localContext">The <see cref="LocalPluginContext"/> which contains the
        /// <see cref="IPluginExecutionContext"/>,
        /// <see cref="IOrganizationService"/>
        /// and <see cref="ITracingService"/>
        /// </param>
        /// <remarks>
        /// For improved performance, Microsoft Dynamics CRM caches plug-in instances.
        /// The plug-in's Execute method should be written to be stateless as the constructor
        /// is not called for every invocation of the plug-in. Also, multiple system threads
        /// could execute the plug-in at the same time. All per invocation state information
        /// is stored in the context. This means that you should not use global variables in plug-ins.
        /// </remarks>
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

            try
            {
                accountManager.FooPlugin(localContext.PluginExecutionContext.PrimaryEntityId, isUpdate);
            }
            catch (Exception ex)
            {
                throw new InvalidPluginExecutionException(
                    HU.ErrorMessageWrapper(ex));
            }
        }
    }
}
