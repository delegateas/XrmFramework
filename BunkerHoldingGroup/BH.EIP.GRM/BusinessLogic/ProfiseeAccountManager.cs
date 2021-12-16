using System;
using System.Linq;
using Microsoft.Xrm.Sdk;
using DG.XrmFramework.BusinessLogic.Helpers;
using DG.XrmFramework.BusinessLogic.Managers;
using DG.XrmFramework.BusinessDomain.ServiceContext;
using ClientAccount = ProfiseeDataProxyApi.Account;
using DG.XrmFramework.BusinessLogic.ApiController;

namespace DG.XrmFramework.BusinessLogic
{

    public class ProfiseeAccountManager : ManagerBase
    {
        #region Constructors
        public ProfiseeAccountManager(
           ITracingService tracingService,
           IOrganizationService orgService,
           IOrganizationService orgAdminService) : base(tracingService, orgService, orgAdminService) { }
        #endregion

        #region Public Methods 
        public Account RetriveProfiseeMasterDataByCode(string code)
        {
            var config = ApiConfiguration.GetInstance(orgAdminService);

            var tokenController = new ProfiseeAccessTokenController(
                accessTokenUrl: config.grm_oauthmdmaccesstokenurl + config.grm_oauthmdmaccesstokenbaseurl,
                appId: config.grm_oauthmdmappid,
                clientId: config.grm_oauthmdmclientid,
                clientSecret: config.grm_oauthmdmclientsecret);

            var token = tokenController.GenerateAccessToken();
            token.Wait();
            var tokenResult = token.Result;

            var profiseeController = new ProfiseeAccountController(
                apiKey: config.grm_mdmapikey,
                apiVersion: config.grm_mdmapiversion,
                baseUrl: config.grm_ProfiseeDataApiBaseUrl,
                accessToken: tokenResult);
            var response = profiseeController.GetProfiseeAccountByCode(code);
            response.Wait();
            var profiseeAccount = response.Result;

            return new Account
            {
                Name = profiseeAccount.Name + " " + profiseeAccount.Name2,
                Address1_Line1 = profiseeAccount.Address,
                Address1_Line2 = profiseeAccount.Address2,
                Address1_City = profiseeAccount.City,
                Telephone1 = profiseeAccount.PhoneNo,
                Address1_PostalCode = profiseeAccount.PostCode,
                grm_mdid = profiseeAccount.MdId
            };
        }

        #endregion

        #region Private Methods
        #endregion
    }
}
