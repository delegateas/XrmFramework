using ProfiseeDataProxyApi;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace DG.XrmFramework.BusinessLogic.ApiController
{
    public class ProfiseeAccountController
    {
        private readonly HttpClient HttpClient = new HttpClient();
        private string ApiKey { get; set; }
        private string ApiVersion { get; set; }
        private string BaseUrl { get; set; }
        private string AccessToken { get; set; }


        public ProfiseeAccountController(string apiKey, string apiVersion, string baseUrl, string accessToken)
        {
            ApiKey = apiKey;
            ApiVersion = apiVersion;
            BaseUrl = baseUrl;
            AccessToken = accessToken;
        }

        public async Task<AccountWithRelations> GetProfiseeAccountByCode(string code)
        {
            try
            {
                AccountsClient accountClient = new AccountsClient(HttpClient, ApiKey, ApiVersion, AccessToken)
                {
                    BaseUrl = BaseUrl
                };

                return await accountClient.GetByCodeAsync(code);
            }
            catch (Exception e)
            {
                throw new Exception($"Unknown GetAccounts Exception", e);
            }
        }
    }
}
