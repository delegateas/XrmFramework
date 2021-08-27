using System;
using DG.Tools;
using Microsoft.Xrm.Sdk;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using DG.Tools.XrmMockup;
using DG.XrmOrg.XrmSolution.Workflow;
using DG.XrmFramework.BusinessDomain.ServiceContext;

namespace DG.XrmOrg.XrmSolution.Tests
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
            var tmp = new SavedQuery(); //TODO: Temp fix to ensure BusinessDomain-assembly is loaded before running mockup. Awaits a new mockup-release https://github.com/delegateas/XrmMockup/issues/66
            crm = XrmMockup365.GetInstance(new XrmMockupSettings
            {
                BasePluginTypes = new Type[] { typeof(DG.XrmOrg.XrmSolution.Plugins.Plugin) },
                CodeActivityInstanceTypes = new Type[] { typeof(AccountCustomActivity) },
                EnableProxyTypes = true,
                IncludeAllWorkflows = true
            });
        }
    }
}