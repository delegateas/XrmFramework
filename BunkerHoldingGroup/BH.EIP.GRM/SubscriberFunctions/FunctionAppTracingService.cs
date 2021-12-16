using Microsoft.Azure.WebJobs.Host;
using Microsoft.Xrm.Sdk;

namespace FunctionApps
{
    internal class FunctionAppTracingService : ITracingService
    {
        private TraceWriter log;

        public FunctionAppTracingService(TraceWriter log)
        {
            this.log = log;
        }

        public void Trace(string format, params object[] args)
        {
            if (args.Length == 0)
            {
                log.Info(format);
            }
            else
            {
                log.Info(string.Format(format, args));
            }
        }
    }
}