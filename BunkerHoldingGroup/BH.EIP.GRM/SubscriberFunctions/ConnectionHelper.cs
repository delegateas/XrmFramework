using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.WebServiceClient;
using System;
using System.Threading.Tasks;
using Microsoft.Xrm.Tooling.Connector;

namespace FunctionApps
{
    internal static class ConnectionHelper
    {
        public static async Task<OrganizationWebProxyClient> WithManageIdentity(ITracingService tracingService, Guid? impersonatedUser = null)
        {
            /* //string uri = Environment.GetEnvironmentVariable("APPSETTING_CRM-uri");

             string uri = "https://grm-sales-dev.crm4.dynamics.com";

             var azureServiceTokenProvider = new AzureServiceTokenProvider();
             string accessToken = await azureServiceTokenProvider.GetAccessTokenAsync(uri).ConfigureAwait(false);

             tracingService.Trace($"Connecting to uri {uri}");
             var orgService = new OrganizationWebProxyClient(new Uri(uri + "/XrmServices/2011/Organization.svc/web"), true)
             {
                 HeaderToken = accessToken
             };

             if (impersonatedUser != null)
                 orgService.CallerId = impersonatedUser.Value;
             return orgService;*/
            return null;
        }

        public static IOrganizationService GetOrganizationServiceClientSecret(ITracingService tracingService)
        {
            string clientId = "7e3d08aa-3a76-4f55-9994-babd3067aeb0";
            string clientSecret = "qjV`vm2stXPzfaJ6k&3.Q>Zg4NiRTKI9c5";
            string organizationUri = "https://grm-sales-dev.crm4.dynamics.com";

            try
            {
                var connection = new CrmServiceClient($@"AuthType=ClientSecret;url={organizationUri};ClientId={clientId};ClientSecret={clientSecret}");

                return connection.OrganizationWebProxyClient != null ? connection.OrganizationWebProxyClient : (IOrganizationService)connection.OrganizationServiceProxy;
            }
            catch (Exception ex)
            {
                tracingService.Trace("Error while connecting to CRM " + ex.Message);
                return null;
            }
        }

    }
}
