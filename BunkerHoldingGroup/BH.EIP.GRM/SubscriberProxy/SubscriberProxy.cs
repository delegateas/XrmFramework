using BH.EIP.Core.Logging;
using BH.EIP.Endpoints.GRM;
using BH.EIP.Events.MDM.Account;
using BH.EIP.SDK;
using BH.EIP.SDK.EventHandlers;
using BH.EIP.SDK.Logging;
using Microsoft.Azure.ServiceBus;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Serilog;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SubscriberProxy
{
    public static class SubscriberProxy
    {
        private static ISubscriberClient subscriberClient;

        static SubscriberProxy()
        {
            string serviceBusConnection = Environment.GetEnvironmentVariable("AzureWebJobsServiceBus");

            var topicClient = new TopicClient(serviceBusConnection, new GrmEndpoint().Id);

            string globalTraceLogInstrKey = Environment.GetEnvironmentVariable("GlobalTraceLogInstrKey");
            Serilog.ILogger baseLogger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.Console()
                .WriteTo.ApplicationInsights(globalTraceLogInstrKey, TelemetryConverter.Traces)
                .CreateLogger();

            ILoggerProvider loggerProvider = new LoggerProvider(baseLogger);

            IServiceProvider serviceProvider = new ServiceCollection().BuildServiceProvider();

            subscriberClient = new SubscriberClient(topicClient, serviceProvider, loggerProvider);
            subscriberClient.RegisterHandler<MdmAccountCreated>(sp => new CreatedHandler());
            subscriberClient.RegisterHandler<MdmAccountUpdated>(sp => new UpdatedHandler());
            subscriberClient.RegisterHandler<MdmAccountDeleted>(sp => new DeletedHandler());
        }

        [FunctionName("ReceiveMessage")]
        public static async Task Run(
            [ServiceBusTrigger(topicName: "%EndpointId%", subscriptionName: "%EndpointId%", Connection = "AzureWebJobsServiceBus", IsSessionsEnabled = true)]
            Message message,
            IMessageSession messageSession,
            Microsoft.Extensions.Logging.ILogger log)
        {
            await subscriberClient.Handle(message, messageSession);
        }

        class CreatedHandler : IEventHandler<MdmAccountCreated>
        {
            public async Task Handle(MdmAccountCreated @event, BH.EIP.Core.Logging.ILogger logger)
            {
                /*
                 * This handler should maybe be used later to automatically create
                 * accounts in GRM after creation in Profisee.
                /*
                logger.Information($"EventType:{@event?.MessageMetadata?.EventType}, " +
                    $"EventId:{@event?.MessageMetadata?.EventId}, " +
                    $"CorrelationId:{@event?.MessageMetadata?.CorrelationId}");

                var json = JsonConvert.SerializeObject(@event);
                var url = Environment.GetEnvironmentVariable("");

                try
                {
                    var request = new HttpRequestMessage(HttpMethod.Post, url)
                    {
                        Content = new StringContent(json, Encoding.UTF8, "application/json")
                    };

                    var client = new HttpClient();
                    var response = client.SendAsync(request).Result;
                    if (!response.IsSuccessStatusCode)
                        throw new Exception($"[{@event.GetEventType().Id}] {response.Content.ReadAsStringAsync().Result}");
                }
                catch (Exception ex)
                {
                    logger.Information(ex.Message);
                    throw;
                }
                */
            }
        }

        class UpdatedHandler : IEventHandler<MdmAccountUpdated>
        {
            public async Task Handle(MdmAccountUpdated @event, BH.EIP.Core.Logging.ILogger logger)
            {
                logger.Information($"EventType:{@event?.MessageMetadata?.EventType}, " +
                    $"EventId:{@event?.MessageMetadata?.EventId}, " +
                    $"CorrelationId:{@event?.MessageMetadata?.CorrelationId}");

                var json = JsonConvert.SerializeObject(@event);
                //var url = Environment.GetEnvironmentVariable("");
                var url = "http://localhost:7071/api/ProfiseeAccountCUD";

                try
                {
                    var request = new HttpRequestMessage(HttpMethod.Post, url)
                    {
                        Content = new StringContent(json, Encoding.UTF8, "application/json")
                    };

                    var client = new HttpClient();
                    var response = client.SendAsync(request).Result;
                    if (!response.IsSuccessStatusCode)
                        throw new Exception($"[{@event.GetEventType().Id}] {response.Content.ReadAsStringAsync().Result}");
                }
                catch (Exception ex)
                {
                    logger.Information(ex.Message);
                    throw;
                }
            }
        }

        class DeletedHandler : IEventHandler<MdmAccountDeleted>
        {
            public async Task Handle(MdmAccountDeleted @event, BH.EIP.Core.Logging.ILogger logger)
            {
                /*
                 * This handler should maybe be used later to automatically delete
                 * accounts in GRM after deletion in Profisee.
                /*
                logger.Information($"EventType:{@event?.MessageMetadata?.EventType}, " +
                    $"EventId:{@event?.MessageMetadata?.EventId}, " +
                    $"CorrelationId:{@event?.MessageMetadata?.CorrelationId}");

                var json = JsonConvert.SerializeObject(@event);
                var url = Environment.GetEnvironmentVariable("");

                try
                {
                    var request = new HttpRequestMessage(HttpMethod.Post, url)
                    {
                        Content = new StringContent(json, Encoding.UTF8, "application/json")
                    };

                    var client = new HttpClient();
                    var response = client.SendAsync(request).Result;
                    if (!response.IsSuccessStatusCode)
                        throw new Exception($"[{@event.GetEventType().Id}] {response.Content.ReadAsStringAsync().Result}");
                }
                catch (Exception ex)
                {
                    logger.Information(ex.Message);
                    throw;
                }
                */
            }
        }
    }
}