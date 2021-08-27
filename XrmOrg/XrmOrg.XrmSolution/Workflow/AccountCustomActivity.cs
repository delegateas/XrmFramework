using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmOrg.XrmSolution.BusinessLogic.Managers;
using HU = DG.XrmOrg.XrmSolution.BusinessLogic.Helpers.HelperUtils;

namespace DG.XrmOrg.XrmSolution.Workflow
{
    public sealed partial class AccountCustomActivity : CodeActivity
    {
        protected override void Execute(CodeActivityContext executionContext)
        {
            var traceService = executionContext.GetExtension<ITracingService>()
                as ITracingService;
            var workflowExecutionContext =
                executionContext.GetExtension<IWorkflowContext>()
                as IWorkflowContext;
            var factory =
                executionContext.GetExtension<IOrganizationServiceFactory>()
                as IOrganizationServiceFactory;
            var orgService =
                factory.CreateOrganizationService(workflowExecutionContext.UserId) 
                as IOrganizationService;
            var orgAdminService =
                factory.CreateOrganizationService(null)
                as IOrganizationService;

            // Retrieve the id
            var accountId = this.inputEntity.Get(executionContext).Id;

            // Create a task entity
            var taskId = new ManagerAccount(
                traceService, workflowExecutionContext,
                orgService, orgAdminService).BarWorkflow(accountId);

            this.taskCreated.Set(executionContext,
                new EntityReference(Task.EntityLogicalName, taskId));
        }

        // Define Input/Output Arguments
        [RequiredArgument]
        [Input("InputEntity")]
        [ReferenceTarget("account")]
        public InArgument<EntityReference> inputEntity { get; set; }

        [Output("TaskCreated")]
        [ReferenceTarget("task")]
        public OutArgument<EntityReference> taskCreated { get; set; }
    }
}
