using System;
using System.Collections.Generic;
using System.Text;

namespace FunctionApps.Models
{
    class ProfiseeEventModel
    {
        public string Code { get; set; }
        public MessageMetadata MessageMetaData { get; set; }

        public class MessageMetadata
        {
            public string EventId { get; set; }
            public string CorrelationId { get; set; }
            public string EventType { get; set; }
        }
    }
}
