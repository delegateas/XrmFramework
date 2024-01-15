using Microsoft.Xrm.Sdk;
using System;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs
{
    internal class Logger : ITracingService
    {
        private string BuildLogLine(string format, params object[] args)
        {
            var formated = string.Format(format, args);
            DateTime timeStamp = DateTime.Now;
            return timeStamp.ToLongTimeString() + ": " + formated;
        }

        public void Trace(string format, params object[] args)
        {
            var line = BuildLogLine(format, args);
            Console.WriteLine(line);
        }
    }
}
