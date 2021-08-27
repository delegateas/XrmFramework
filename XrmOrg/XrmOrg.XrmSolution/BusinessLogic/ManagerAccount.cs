using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

using Microsoft.Xrm.Sdk;
using System.ServiceModel.Description;

using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmOrg.XrmSolution.BusinessLogic.Helpers;
using HBD = DG.XrmOrg.XrmSolution.BusinessLogic.Helpers.HelperBusinessDomain;
using HP = DG.XrmOrg.XrmSolution.BusinessLogic.Helpers.HelperPlugin;
using HU = DG.XrmOrg.XrmSolution.BusinessLogic.Helpers.HelperUtils;
using Microsoft.Xrm.Sdk.Workflow;

namespace DG.XrmOrg.XrmSolution.BusinessLogic.Managers
{
    public class ManagerAccount : ManagerBase
    {

        #region Constructors

        public ManagerAccount(
            ITracingService pluginTracingService,
            IPluginExecutionContext pluginExecutionContext,
            IOrganizationService pluginOrgService,
            IOrganizationService pluginOrgAdminService)
            : base(pluginTracingService, pluginExecutionContext,
                pluginOrgService, pluginOrgAdminService) { }

        public ManagerAccount(
            ITracingService tracingService,
            IWorkflowContext workflowExecutionContext,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
            : base(tracingService, workflowExecutionContext,
                orgService, orgAdminService) { }

        public ManagerAccount(
            ITracingService tracingService,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
            : base(tracingService, orgService, orgAdminService) { }

        #endregion


        public void FooPlugin(Guid primaryEntityId, bool isUpdate) {
            var contactManager = GetManager<ManagerContact>();
            using (var context = new Xrm(this.orgService)) {
                var account = context.AccountSet.FirstOrDefault();
                throw new NotImplementedException();
            }
        }

        public Guid BarWorkflow(Guid accountId) {
            throw new NotImplementedException();
        }
        
    }

}
