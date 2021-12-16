using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Discovery;
using Microsoft.Xrm.Sdk.Workflow;

using DG.XrmFramework.BusinessDomain.ServiceContext;

namespace DG.XrmFramework.BusinessLogic.Managers
{
    public class ManagerBase
    {
        #region Inner classes

        #endregion

        #region Private properties

        protected IPluginExecutionContext pluginContext;
        protected IWorkflowContext workflowContext;

        protected ITracingService tracingService;
        protected IOrganizationService orgService;
        protected IOrganizationService orgAdminService;
        
        protected IServiceManagement<IDiscoveryService> discoveryServiceManagement;
        protected IServiceManagement<IOrganizationService> orgServiceManagement;

        #endregion

        #region Public properties

        #endregion

        #region Constructors

        private ManagerBase() { }

        public ManagerBase(
            ITracingService tracingService,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
        {
            this.tracingService = tracingService;
            this.orgService = orgService;
            this.orgAdminService = orgAdminService;
        }

        public ManagerBase(
            ITracingService pluginTracingService,
            IPluginExecutionContext pluginExecutionContext,
            IOrganizationService pluginOrgService,
            IOrganizationService pluginOrgAdminService)
        {
            this.tracingService = pluginTracingService;
            this.pluginContext = pluginExecutionContext;
            this.orgService = pluginOrgService;
            this.orgAdminService = pluginOrgAdminService;
        }

        public ManagerBase(
            ITracingService tracingService,
            IWorkflowContext workflowExecutionContext,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
        {
            this.tracingService = tracingService;
            this.workflowContext = workflowExecutionContext;
            this.orgService = orgService;
            this.orgAdminService = orgAdminService;
        }

        #endregion

        #region Static methods

        #endregion

        #region Public methods

        #endregion

        #region Factory methods

        #endregion

        #region Interface members

        #endregion

        #region Protected methods

        protected void EnsurePluginContext()
        {
            if (null == this.pluginContext)
            {
                var msg = @"This method MUST be executed in a 'plug-in' context";

                this.tracingService.Trace(msg);

                throw new Exception(msg);
            }
        }

        protected void EnsureWorkflowContext()
        {
            if (null == this.workflowContext)
            {
                var msg = @"This method MUST be executed in a 'custom workflow' context";

                this.tracingService.Trace(msg);

                throw new Exception(msg);
            }
        }
        protected T GetManager<T>() where T : ManagerBase
        {
            if (tracingService != null)
            {
                tracingService.Trace($"Creating manager of type {typeof(T).Name}");
            }

            T manager;
            if (pluginContext != null && typeof(T).GetConstructor(new[] { typeof(ITracingService), typeof(IPluginExecutionContext), typeof(IOrganizationService), typeof(IOrganizationService) }) != null)
            {
                manager = (T)Activator.CreateInstance(typeof(T), tracingService, pluginContext, orgService, orgAdminService);
            }
            else if (workflowContext != null && typeof(T).GetConstructor(new[] { typeof(ITracingService), typeof(IWorkflowContext), typeof(IOrganizationService), typeof(IOrganizationService) }) != null)
            {
                manager = (T)Activator.CreateInstance(typeof(T), tracingService, workflowContext, orgService, orgAdminService);
            }
            else if (typeof(T).GetConstructor(new[] { typeof(ITracingService), typeof(IOrganizationService), typeof(IOrganizationService) }) != null)
            {
                manager = (T)Activator.CreateInstance(typeof(T), tracingService, orgService, orgAdminService);
            }
            else
            {
                throw new ArgumentOutOfRangeException("No constructor found");
            }

            return manager;
        }
        #endregion

        #region Private methods

        #endregion

        #region Private classes

        #endregion
    }

    #region Other classes

    #endregion
}
