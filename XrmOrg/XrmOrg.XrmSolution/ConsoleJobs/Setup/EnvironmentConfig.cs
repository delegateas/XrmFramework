using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;
using System;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs
{
    public class EnvironmentConfig
    {
        public EnvironmentEnum CurrentEnvironment { get; private set; }

        public string Url { get; private set; }

        public IOrganizationService Service { get; private set; }
        public ITracingService Tracing { get; private set; }

        private EnvironmentConfig()
        {
            Tracing = new Logger();
        }

        public static EnvironmentConfig Create(EnvironmentEnum env, string clientid, string secret)
        {
            var crmClientId = clientid;
            var crmSecret = secret;
            var crmUrl = GetUrlFromEnvironment(env);
            var service = ConnectOnline(crmUrl, crmClientId, crmSecret);

            return new EnvironmentConfig() { CurrentEnvironment = env, Url = crmUrl, Service = service };
        }

        private static IOrganizationService ConnectOnline(string url, string clientId, string secret)
        {
            var conString = string.Format("AuthType=ClientSecret;Url={0};ClientId={1};ClientSecret={2}",
                         url,
                         clientId,
                         secret);
            var crmConn = new CrmServiceClient(conString);
            return crmConn;
        }

        private static string GetUrlFromEnvironment(EnvironmentEnum env)
        {
            switch (env)
            {
                case EnvironmentEnum.Dev:
                    return "https://my-dev-env.crm4.dynamics.com";
                case EnvironmentEnum.Test:
                    return "https://my-test-env.crm4.dynamics.com";
                case EnvironmentEnum.Prod:
                    return "https://my-prod-env.crm4.dynamics.com";
                default:
                    throw new ArgumentException("Environment not supported");
            }
        }
    }

    public enum EnvironmentEnum
    {
        Dev,
        Test,
        Prod
    }
}
