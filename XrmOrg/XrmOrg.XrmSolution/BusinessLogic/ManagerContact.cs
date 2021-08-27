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
    public class ManagerContact : ManagerBase
    {

        #region Constructors

        public ManagerContact(
            ITracingService pluginTracingService,
            IPluginExecutionContext pluginExecutionContext,
            IOrganizationService pluginOrgService,
            IOrganizationService pluginOrgAdminService)
            : base(pluginTracingService, pluginExecutionContext,
                pluginOrgService, pluginOrgAdminService) { }

        public ManagerContact(
            ITracingService tracingService,
            IWorkflowContext workflowExecutionContext,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
            : base(tracingService, workflowExecutionContext,
                orgService, orgAdminService) { }

        public ManagerContact(
            ITracingService tracingService,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
            : base(tracingService, orgService, orgAdminService) { }

        #endregion


        public void Baz() {
        }
                
    }

}
