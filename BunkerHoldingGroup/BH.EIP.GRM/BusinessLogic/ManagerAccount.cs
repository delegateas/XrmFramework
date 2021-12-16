using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

using Microsoft.Xrm.Sdk;
using System.ServiceModel.Description;

using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmFramework.BusinessLogic.Helpers;
using HBD = DG.XrmFramework.BusinessLogic.Helpers.HelperBusinessDomain;
using HP = DG.XrmFramework.BusinessLogic.Helpers.HelperPlugin;
using HU = DG.XrmFramework.BusinessLogic.Helpers.HelperUtils;
using Microsoft.Xrm.Sdk.Workflow;

namespace DG.XrmFramework.BusinessLogic.Managers
{
    public class ManagerAccount : ManagerBase
    {

        #region Constructors
        public ManagerAccount(
            ITracingService pluginTracingService,
            IPluginExecutionContext pluginExecutionContext,
            IOrganizationService pluginOrgService,
            IOrganizationService pluginOrgAdminService)
            : base(pluginTracingService, pluginExecutionContext,
                pluginOrgService, pluginOrgAdminService) { }

        public ManagerAccount(
            ITracingService tracingService,
            IWorkflowContext workflowExecutionContext,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
            : base(tracingService, workflowExecutionContext,
                orgService, orgAdminService) { }

        public ManagerAccount(
            ITracingService tracingService,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
            : base(tracingService, orgService, orgAdminService) { }

        #endregion

        #region public methods
        public void CreateAccountAfterProfiseeCreate(string accountCode)
        {
            if (string.IsNullOrEmpty(accountCode))
                return;

            var crmCreateAccount = RetrieveProfiseeMasterData(accountCode);

            if (crmCreateAccount == null)
                return;

            // check if account is GRM account

            crmCreateAccount.grm_lastmasterdatasync = DateTime.Now;
            orgAdminService.Create(crmCreateAccount);
            
        }

        public void SetMasterDataAfterProfiseeUpdate(string accountCode)
        {
            if (string.IsNullOrEmpty(accountCode))
                return;

            var crmUpdateAccount = RetrieveProfiseeMasterData(accountCode);

            if (crmUpdateAccount == null)
                return;

            using (var context = new Xrm(orgService))
            {
                var accountId = context.AccountSet
                    .Where(x => x.grm_mdid == crmUpdateAccount.grm_mdid)
                    .Select(x => x.Id)
                    .FirstOrDefault();

                // account is not a GRM account
                if (accountId.Equals(Guid.Empty))
                    return;

                crmUpdateAccount.Id = accountId;
                crmUpdateAccount.grm_lastmasterdatasync = DateTime.Now;
                orgAdminService.Update(crmUpdateAccount);
            }
        }

        public void DeleteAccountAfterProfiseeDelete(string accountCode)
        {
            if (string.IsNullOrEmpty(accountCode))
                return;

            var crmDeleteAccount = RetrieveProfiseeMasterData(accountCode);

            if (crmDeleteAccount == null)
                return;

            using (var context = new Xrm(orgService))
            {
                var accountId = context.AccountSet
                    .Where(x => x.grm_mdid == crmDeleteAccount.grm_mdid)
                    .Select(x => x.Id)
                    .FirstOrDefault();

                // account is not a GRM account
                if (accountId.Equals(Guid.Empty))
                    return;

                orgAdminService.Delete(Account.EntityLogicalName, accountId);
            }
        }

        #endregion

        #region private methods
        private Account RetrieveProfiseeMasterData(string accountCode)
        {
            var profiseeManager = new ProfiseeAccountManager(
                tracingService,
                orgService,
                orgAdminService);

            return profiseeManager.RetriveProfiseeMasterDataByCode(accountCode);
        }

    }
    #endregion
}
