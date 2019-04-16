using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

using Microsoft.Xrm.Sdk;
using System.ServiceModel.Description;

using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmFramework.BusinessLogic.Helpers;
using HBD = DG.XrmFramework.BusinessLogic.Helpers.HelperBusinessDomain;
using HP = DG.XrmFramework.BusinessLogic.Helpers.HelperPlugin;
using HU = DG.XrmFramework.BusinessLogic.Helpers.HelperUtils;
using Microsoft.Xrm.Sdk.Workflow;

namespace DG.XrmFramework.BusinessLogic.Managers
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
