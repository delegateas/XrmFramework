using System;
using System.Collections.Generic;
using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmOrg.XrmSolution.Workflow;
using FluentAssertions;
using Xunit;
using Xunit.Abstractions;
using XUnitTests.Base;

namespace XUnitTests.Workflow
{
    public class TestExample : UnitTestBase
    {
        public TestExample(XrmMockupFixture xrmMockupFixture, ITestOutputHelper testOutput) : base(xrmMockupFixture, testOutput)
        {
        }

        [Fact]
        public void TestTaskIsCreated()
        {
            // Arrange
            var account = new Account();
            account.Id = orgGodService.Create(account);
            var inputs = new Dictionary<string, object>
            {
                {"inputEntity", account.ToEntityReference()}
            };
            var workflow = new AccountCustomActivity();

            // Act
            Func<IDictionary<string, object>> func = () => MockWorkflowInvoker.InvokeWorkflow(workflow, inputs);

            // Assert
            func.Should().Throw<NotImplementedException>();

            // var outputs = MockWorkflowInvoker.InvokeWorkflow(workflow, inputs);
            //var taskCreated = outputs["taskCreated"] as EntityReference;
        }
    }
}