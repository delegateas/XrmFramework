using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmFramework.BusinessLogic;
using HP = DG.XrmFramework.BusinessLogic.Helpers.HelperPlugin;

namespace DG.XrmOrg.XrmSolution.Plugins.BagOrder
{ 
    // Plugin to react if order is changed
    public class CreateXML :Plugin
    {
        public CreateXML() //Plugin skal nok trigger både på mere end 1 statusændring
            : base(typeof(CreateXML))
        {
            RegisterPluginStep<paa_BagOrder>(
                EventOperation.Update,
                ExecutionStage.PreOperation,
                Execute) //der skal image med der tager alle nødvendige felter med
                .AddFilteredAttributes(x=>x.statuscode);
        }

        protected void Execute(LocalPluginContext localPluginContext)
        {
            var bagOrderManager = new ManagerBagOrder(
                localPluginContext.TracingService,
                localPluginContext.PluginExecutionContext,
                localPluginContext.OrganizationService,
                localPluginContext.OrganizationAdminService);
            
            bagOrderManager.test(HP.GetEntity<paa_BagOrder>(localPluginContext.PluginExecutionContext, localPluginContext.TracingService));
        }
    }
}