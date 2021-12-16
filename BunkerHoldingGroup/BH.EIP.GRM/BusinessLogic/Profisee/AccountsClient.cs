using System.Net.Http.Headers;

namespace ProfiseeDataProxyApi
{
    public partial class AccountsClient
    {
        private string ApiKey;
        private string ApiVersion;
        private string Bearer;

        public AccountsClient(System.Net.Http.HttpClient httpClient, string subscriptionKey, string apiVersion, string accessToken) : this(httpClient)
        {
            ApiKey = subscriptionKey;
            ApiVersion = apiVersion;
            Bearer = accessToken;
        }

        partial void PrepareRequest(System.Net.Http.HttpClient client, System.Net.Http.HttpRequestMessage request, string url)
        {
            if (ApiKey != null)
                request.Headers.Add("api-key", ApiKey);

            if (ApiVersion != null)
                request.Headers.Add("api-version", ApiVersion);

            if (Bearer != null)
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", Bearer);
        }
    }
}
