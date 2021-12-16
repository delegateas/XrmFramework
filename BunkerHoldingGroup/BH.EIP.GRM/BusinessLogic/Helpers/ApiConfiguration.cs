using DG.XrmFramework.BusinessDomain.ServiceContext;
using Microsoft.Xrm.Sdk;
using System.Linq;

namespace DG.XrmFramework.BusinessLogic.Helpers
{
    public class ApiConfiguration
    {
        private ApiConfiguration() { }

        public static grm_api_configuration GetInstance(IOrganizationService organizationService)
        {
            using (var context = new Xrm(organizationService))
            {
                return context.grm_api_configurationSet.FirstOrDefault();
            }
        }
    }
}
