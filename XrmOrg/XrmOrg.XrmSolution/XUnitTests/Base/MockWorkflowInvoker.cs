using System;
using System.Collections.Generic;
using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using Moq;

namespace XUnitTests.Base
{
    public class MockWorkflowInvoker
    {
        private readonly XrmMockupFixture _xrmMockupFixture;

        public MockWorkflowInvoker(XrmMockupFixture xrmMockupFixture)
        {
            _xrmMockupFixture = xrmMockupFixture;
        }

        public IDictionary<string, object> InvokeWorkflow(CodeActivity workflow)
        {
            var mockWorkflowInvoker = GetMockedWorkflowInvoker(workflow);
            return mockWorkflowInvoker.Invoke();
        }

        public IDictionary<string, object> InvokeWorkflow(CodeActivity workflow, Dictionary<string, object> inputs)
        {
            var mockWorkflowInvoker = GetMockedWorkflowInvoker(workflow);
            return mockWorkflowInvoker.Invoke(inputs);
        }

        public IDictionary<string, object> InvokeWorkflow(CodeActivity workflow, Entity entity)
        {
            var mockWorkflowInvoker = GetMockedWorkflowInvoker(workflow, entity);
            return mockWorkflowInvoker.Invoke();
        }

        public IDictionary<string, object> InvokeWorkflow(CodeActivity workflow, Entity entity,
            Dictionary<string, object> inputs)
        {
            var mockWorkflowInvoker = GetMockedWorkflowInvoker(workflow, entity);
            return mockWorkflowInvoker.Invoke(inputs);
        }

        private WorkflowInvoker GetMockedWorkflowInvoker(CodeActivity workflow, Entity entity = null)
        {
            var workflowContext = new Mock<IWorkflowContext>();
            var orgServiceFactory = new Mock<IOrganizationServiceFactory>();
            var tracingService = GetTracingService();

            if (entity != null && entity.Id != Guid.Empty)
            {
                workflowContext.Setup(context => context.PrimaryEntityId).Returns(entity.Id);
            }

            orgServiceFactory.Setup(factory => factory.CreateOrganizationService(It.IsAny<Guid?>()))
                .Returns((Guid guid) => XrmMockupFixture.Crm.CreateOrganizationService(guid));
            orgServiceFactory.Setup(factory => factory.CreateOrganizationService(null))
                .Returns(XrmMockupFixture.Crm.GetAdminService());

            var invoker = new WorkflowInvoker(workflow);
            invoker.Extensions.Add(() => tracingService.Object);
            invoker.Extensions.Add(() => orgServiceFactory.Object);
            invoker.Extensions.Add(() => workflowContext.Object);
            return invoker;
        }

        private static Mock<ITracingService> GetTracingService()
        {
            var tracingService = new Mock<ITracingService>();
            tracingService.Setup(service => service.Trace(It.IsAny<string>(), It.IsAny<object[]>()))
                .Callback<string, object[]>((format, args) =>
                {
                    try
                    {
                        Console.WriteLine(format, args);
                    }
                    catch
                    {
                        Console.WriteLine(format);
                    }
                });
            return tracingService;
        }
    }
}