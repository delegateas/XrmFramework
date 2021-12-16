using System;
using DG.Tools;
using Microsoft.Xrm.Sdk;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using DG.Tools.XrmMockup;
using DG.XrmFramework.BusinessDomain.ServiceContext;

namespace DG.XrmFramework.Tests
{

    [TestClass]
    public class TestBase
    {
        protected IOrganizationService orgAdminUIService;
        protected IOrganizationService orgAdminService;
        protected static XrmMockup365 crm;

        public TestBase()
        {
            this.orgAdminUIService = crm.GetAdminService(new MockupServiceSettings(true, false, MockupServiceSettings.Role.UI));
            this.orgAdminService = crm.GetAdminService();
        }

        [TestCleanup]
        public void TestCleanup()
        {
            crm.ResetEnvironment();
        }


        [AssemblyInitialize]
        public static void InitializeServices(TestContext context)
        {
            InitializeMockup(context);
        }

        public static void InitializeMockup(TestContext context)
        {
        }
    }
}
