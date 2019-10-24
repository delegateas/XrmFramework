
namespace DG.XrmOrg.XrmSolution.Plugins
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using System.ServiceModel;
    using System.Text;
    using System.Threading.Tasks;
    using Microsoft.ApplicationInsights;
    using Microsoft.ApplicationInsights.Extensibility;
    using Microsoft.ApplicationInsights.Extensibility.W3C;
    using Microsoft.Xrm.Sdk;
    public class DGTracingService : IDGTracingService
    {
        private ITracingService xrmTrace;
        private TelemetryClient telemetryClient;

        public DGTracingService(ITracingService xrmTrace)
        {
            var InstrumentationKey = "KEY HERE - OR BLANK FOR RETRIEVED KEY";

            this.xrmTrace = xrmTrace;
            // Set up telemetryClient for application insights
            var configuration = TelemetryConfiguration.CreateDefault();
            configuration.InstrumentationKey = InstrumentationKey;
            // This initializer enables us to correlate all logging into execution contexts
            configuration.TelemetryInitializers.Add(new OperationCorrelationTelemetryInitializer());
            telemetryClient = new TelemetryClient(configuration);

            telemetryClient.Context.Operation.Id = Guid.NewGuid().ToString();
        }

        public DGTracingService(ITracingService xrmTrace, Guid correlationId) : this(xrmTrace)
        {
            // By default we generate a new Guid for correlation.
            // If a correlationId is supplied, we set it to that instead.
            telemetryClient.Context.Operation.Id = correlationId.ToString();
        }
        public DGTracingService(ITracingService xrmTrace, Guid correlationId, string instrumentationKey) : this(xrmTrace, correlationId)
        {
            telemetryClient.InstrumentationKey = instrumentationKey;
        }


        public void Trace(string format, params object[] args)
        {
            // This trace method wraps around xrmTrace, so we make sure to pass it along
            xrmTrace.Trace(format, args);
            telemetryClient.TrackTrace(string.Format(format, args));
        }

        public void TraceDependency(string operationType, string call, string name, DateTime startTime, TimeSpan endTime)
        {
            // Dependency tracing creates a timeline overview of time to run plugins.
            // Logged data can be customized as needed.
            var command = string.Format(
                CultureInfo.InvariantCulture,
                "{0} firing for: {1}, Message: {2}",
                name,
                call,
                operationType);

            telemetryClient.TrackDependency(
                operationType,
                name,
                command,
                startTime, endTime, true);
        }

        public void TraceException(FaultException<OrganizationServiceFault> e)
        {
            telemetryClient.TrackException(e);
        }

    }
}
