using System;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;

namespace DG.XrmOrg.XrmSolution.Plugins
{
    public interface IDGTracingService : ITracingService
    {
        void Trace(string format, params object[] args);
        void TraceDependency(string operationType, string call, string name, DateTime startTime, TimeSpan endTime);
        void TraceException(FaultException<OrganizationServiceFault> e);
    }
}