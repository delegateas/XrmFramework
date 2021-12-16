using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Runtime.Serialization.Json;
using System.IO;
using Newtonsoft.Json;

namespace DG.XrmFramework.BusinessLogic.ApiController
{
    public class ProfiseeAccessTokenController
    {
        private static readonly HttpClient HttpClient = new HttpClient();
        private string AccessTokenUrl { get; set; }
        private string AppId { get; set; }
        private string ClientId { get; set; }
        private string ClientSecret { get; set; }

        public ProfiseeAccessTokenController(string accessTokenUrl, string appId, string clientId, string clientSecret)
        {
            HttpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/x-www-form-urlencoded"));
            AccessTokenUrl = accessTokenUrl;
            AppId = appId;
            ClientId = clientId;
            ClientSecret = clientSecret;
        }

        public async Task<string> GenerateAccessToken()
        {
            try
            {
                var request = GetHttpRequestMessage(AccessTokenUrl, AppId, ClientId, ClientSecret);
                var response = await HttpClient.SendAsync(request);

                try
                {
                    var status = (int)response.StatusCode;
                    if (status == 200)
                    {
                        var objectResponse = await response.Content.ReadAsStringAsync();
                        if (objectResponse == null)
                        {
                            throw new Exception("Response was null which was not expected.");
                        }
                        var token = JsonConvert.DeserializeObject<AccessTokenResponse>(objectResponse); // JSONSerializer<AccessTokenResponse>.DeSerialize(objectResponse); 
                        return token.access_token;
                    }
                    else
                    {
                        throw new Exception($"The HTTP status code of the response was not expected ({status}).");
                    }
                }
                catch (Exception e)
                {
                    throw new Exception("Unknown Http exception.", e);
                }
            }
            catch (Exception e)
            {
                throw new Exception("Unknown HttpClient Exception", e);
            }
        }

        private HttpRequestMessage GetHttpRequestMessage(string accessTokenUrl, string appId, string clientId, string clientSecret)
        {
            List<KeyValuePair<string, string>> postData = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>("grant_type", "client_credentials"),
                new KeyValuePair<string, string>("scope", "api://" + appId + "/.default")
            };

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, accessTokenUrl)
            {
                Content = new FormUrlEncodedContent(postData)
            };

            request.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(Encoding.ASCII.GetBytes($"{clientId}:{clientSecret}")));
            return request;
        }

        private class AccessTokenResponse
        {
            public string token_type { get; set; }
            public int expires_in { get; set; }
            public int ext_expires_in { get; set; }
            public string access_token { get; set; }
        }
    }

    public static class JSONSerializer<TType> where TType : class
    {
        /// <summary>
        /// Serializes an object to JSON
        /// </summary>
        public static string Serialize(TType instance)
        {
            var serializer = new DataContractJsonSerializer(typeof(TType));
            using (var stream = new MemoryStream())
            {
                serializer.WriteObject(stream, instance);
                return Encoding.Default.GetString(stream.ToArray());
            }
        }
        /// <summary>
        /// DeSerializes an object from JSON
        /// </summary>
        public static TType DeSerialize(string json)
        {
            using (var stream = new MemoryStream(Encoding.Default.GetBytes(json)))
            {
                var serializer = new DataContractJsonSerializer(typeof(TType));
                return serializer.ReadObject(stream) as TType;
            }
        }
    }
}

