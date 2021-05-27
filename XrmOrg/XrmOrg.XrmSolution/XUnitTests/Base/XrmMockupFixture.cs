using System;
using System.Activities;
using System.IO;
using DG.Tools.XrmMockup;
using DG.XrmFramework.BusinessDomain.ServiceContext;

namespace XUnitTests.Base
{
    /// <summary>
    /// xUnit Fixture class for accessing XrmMockup. 
    /// </summary>
    public class XrmMockupFixture : IDisposable
    {
        public static XrmMockup365 Crm { get; private set; }

        public XrmMockupFixture()
        {
            // Init
            InitializeMockup();
        }

        public void Dispose()
        {
            // Cleanup
        }

        private void InitializeMockup()
        {
            var tmp = new SavedQuery();
            Console.Write(Directory.GetCurrentDirectory());
            Crm = XrmMockup365.GetInstance(new XrmMockupSettings
            {
                BasePluginTypes = new[] {typeof(DG.XrmOrg.XrmSolution.Plugins.Plugin)},
                CodeActivityInstanceTypes = new[] {typeof(CodeActivity)},
                EnableProxyTypes = true,
                IncludeAllWorkflows = false
            });
        }
    }
}