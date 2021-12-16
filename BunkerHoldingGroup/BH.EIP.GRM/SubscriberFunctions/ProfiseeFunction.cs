using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using DG.XrmFramework.BusinessLogic.Managers;
using Microsoft.Xrm.Sdk;
using System;
using Newtonsoft.Json;
using FunctionApps.Models;

namespace FunctionApps
{
    public static class ProfiseeFunction
    {
        [FunctionName("ProfiseeAccountCUD")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequestMessage req, TraceWriter log)
        {
            log.Info("ProfiseeCreate function processed a request.");

            string requestBody = await req.Content.ReadAsStringAsync();
            ProfiseeEventModel profiseeEvent = JsonConvert.DeserializeObject<ProfiseeEventModel>(requestBody);

            ITracingService tracingService = new FunctionAppTracingService(log);
            try
            {
                //var orgService = await ConnectionHelper.WithManageIdentity(tracingService);
                var orgService = ConnectionHelper.GetOrganizationServiceClientSecret(tracingService);

                var accountmanager = new ManagerAccount(tracingService, orgService, orgService);
                var eventType = profiseeEvent.MessageMetaData.EventType;
                var accountCode = profiseeEvent.Code;

                switch (eventType)
                {
                    case "MdmAccountCreated":
                        //accountmanager.CreateAccountAfterProfiseeCreate(accountCode);
                        break;
                    case "MdmAccountUpdated":
                        accountmanager.SetMasterDataAfterProfiseeUpdate(accountCode);
                        break;
                    case "MdmAccountDeleted":
                        //accountmanager.DeleteAccountAfterProfiseeDelete(accountCode);
                        break;
                    default:
                        throw new Exception("Message from Profisee should be Create/Update/Delete");
                }

                return req.CreateResponse(HttpStatusCode.OK, "Account handled in CRM");
            }
            catch (Exception ex)
            {
                return req.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
