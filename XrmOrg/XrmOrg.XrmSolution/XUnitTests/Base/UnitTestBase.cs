using System;
using DG.Tools.XrmMockup;
using FluentAssertions.Execution;
using Microsoft.Xrm.Sdk;
using Xunit;
using Xunit.Abstractions;

namespace XUnitTests.Base
{
    [Collection("Xrm Collection")]
    public class UnitTestBase : IDisposable
    {
        protected readonly IOrganizationService orgAdminUIService;
        protected readonly IOrganizationService orgAdminService;
        protected readonly IOrganizationService orgGodService;
        protected readonly XrmMockupFixture xrmMockupFixture;
        private AssertionScope _assertionScope;
        public MockWorkflowInvoker MockWorkflowInvoker { get; }

        protected UnitTestBase(XrmMockupFixture xrmMockupFixture, ITestOutputHelper testOutput)
        {
            XunitContext.Register(testOutput);
            this.xrmMockupFixture = xrmMockupFixture;
            orgAdminUIService = XrmMockupFixture.Crm.GetAdminService(new MockupServiceSettings(true, false, MockupServiceSettings.Role.UI));
            orgAdminService = XrmMockupFixture.Crm.GetAdminService();
            orgGodService = XrmMockupFixture.Crm.GetAdminService(new MockupServiceSettings(false, true, MockupServiceSettings.Role.SDK));
            _assertionScope = new AssertionScope();
            MockWorkflowInvoker = new MockWorkflowInvoker(xrmMockupFixture);
        }

        public void Dispose()
        {
            XrmMockupFixture.Crm.ResetEnvironment();
            XunitContext.Flush();
            _assertionScope.Dispose();
        }
    }
}