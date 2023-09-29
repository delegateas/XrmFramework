using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Serialization;
using DG.XrmFramework.BusinessDomain.ServiceContext;
using DG.XrmFramework.BusinessLogic.Managers;
using DG.XrmOrg.XrmSolution.Plugins.DTO;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

namespace DG.XrmFramework.BusinessLogic
{
    public class ManagerBagOrder : ManagerBase
    {
        #region Constructors

        public ManagerBagOrder(
            ITracingService pluginTracingService,
            IPluginExecutionContext pluginExecutionContext,
            IOrganizationService pluginOrgService,
            IOrganizationService pluginOrgAdminService)
            : base(pluginTracingService, pluginExecutionContext,
                pluginOrgService, pluginOrgAdminService) { }

        public ManagerBagOrder(
            ITracingService tracingService,
            IWorkflowContext workflowExecutionContext,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
            : base(tracingService, workflowExecutionContext,
                orgService, orgAdminService) { }

        public ManagerBagOrder(
            ITracingService tracingService,
            IOrganizationService orgService,
            IOrganizationService orgAdminService)
            : base(tracingService, orgService, orgAdminService) { }

        #endregion

        private string _shortname = "";
        private string _email = "";
        private string _projectNumber = "";
        private string _installationsNumber = "";
        private Guid _customer = Guid.Empty;
        
        public void test(paa_BagOrder target)
        {
            var doc = new DOCUMENT();
            doc.DOCUMENTHEAD = CreateXMLDocumentHead(target);
            doc.DOCUMENTLINE = CreateXmlDocumentLine(target);

            var serializer = new XmlSerializer(typeof(DOCUMENT));
            using (var writer = new StreamWriter("../../../BusinessLogic/DTO/tests.xml"))
            {
                serializer.Serialize(writer, doc);
            }
            
            MemoryStream memStream = new MemoryStream();
            serializer.Serialize(memStream, doc);
            memStream.Position = 0;
            
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(DOCUMENT));
            DOCUMENT docOb = ((DOCUMENT)xmlSerializer.Deserialize(memStream));
        }

        private DOCUMENTHEAD CreateXMLDocumentHead(paa_BagOrder target)
        {
            var projDetails = GetProjectDetails(target.paa_Project.Id);
            _shortname = projDetails.Id.ToString(); //skal være shortname
            _email = GetEmail();
            _projectNumber = projDetails.paa_ProjectNumber;
            _installationsNumber = projDetails.paa_InstallationNumber;
            _customer = projDetails.paa_account.Id;

            var documentHead = new DOCUMENTHEAD()
            {
                SourceID = "Rørbasen",
                DocumentType = "SORD", // Hvis status = bestilling så SORD ellers SORDCHG
                DocumentNo = _projectNumber + _installationsNumber + "?",
                InterchangeSender = "Rorbasen",
                InterchangeReceiver = 999,
                Dates = new Dates()
                {
                    DocumentDate = DateTime.Today.ToString("yyyy-mm-dd")
                },
                DocumentCurrencyCode = "",
                ContactEmailAtPartner = _email,
                ContactNameAtPartner = "??", //vides ikke endnu
                CustomerOrderNo = "??", // Installtionsnr eller multiID? Se kode 2334-2336 - ingen mapning pt
                Reference = new Reference()
                {
                    CustomerReference = _projectNumber + "/" + _shortname +
                                        "Hvis multiID ikke har værdi anvendes installationsnummer(findes på posebestilling)" //Noget logik med multiid i koden - 2340-2342
                },
                Party = GetPartyList(target),
                Mail = new Mail()
                {
                    MailToOrderConf = _email
                },
                Customized = new Customized()
                {
                    DocumentQuoteNo = "", // I tvivl, linje 2510
                    DocumentJobNoPA = "", //Project number
                    DocumentJobTaskNoPA = "Actnum??", //Hvad er det?, linje 2512
                    DocumentShortcutDim2Code = _projectNumber, 
                    DocumentInstallationNo = _installationsNumber, 
                    DocumentMachineAssetCode = GetMobileUnitName(target.Id),//Der er noget logik linje 2515-2519, men burde bare være kørende anlæg
                    DocumentShipmentDate = "", //Logic linje 2520-2525, men ligner ikke der er et felt på bestillingen hertil derfor altid ""
                    DocumentShipmentTime = "", //Logic linje 2520-2525, men ligner ikke der er et felt på bestillingen hertil derfor altid ""
                    DocumentDeliveryDate = target.paa_DeliveryDate?.ToString("yyyy-mm-dd"),
                    DocumentDeliveryTime = target.paa_DeliveryDate?.ToString("HH:mm:ss"),
                    DocumentReliningDate = target.paa_ReliningDate?.ToString("yyyy-mm-dd"),
                    DocumentReliningTime = new object(), // jeg er ikke sikker på dette er rigtigt?
                    DocumentReliningMethod = paa_ReliningType.Retrieve(orgService, target.paa_ReliningType.Id, x=>x.paa_Name).paa_Name,
                    RemarkDeliveryRegulatory = target.paa_RemarksDeliveryAndRegulatoryRequirements,
                    RemarkDiscount = "RABAT: " + target.paa_LinerDiscount + "%. GODKENDER: " + target.paa_Approver,
                    DocumentInstalationStartNo = "", // Der er noget med startbrønd her fra et posestykke, men hvilket?
                    DocumentInstalationEndNo = "", // Der er noget med startbrønd her fra et posestykke, men hvilket?
                    // Se linje 2576, her er noget om <Document_Topring>, som ikke er medtaget her
                    // Se linje 2579-2581, her er noget om <Multibestilling> der ikke er medtaget - det er multiid
                    SpecialOrder = target.paa_NotProductApproved.GetValueOrDefault(), // Default er false, se 2583-2584
                    RemarkTransport = target.paa_RemarksToTransport,
                    DocumentJobCustomer = Account.Retrieve(orgService, _customer, x=>x.Name).Name,
                    Design = target.paa_DesignAndProduction.ToString()
                }
            };
            return documentHead;
        }
        
        private DOCUMENTLINE CreateXmlDocumentLine(paa_BagOrder target)
        {
            using (var context = new Xrm(orgAdminService))
            {
                var documentLine = new DOCUMENTLINE();
                documentLine.LINE = new List<LINE>();
                
                var allBagParts = context.paa_BagPartSet
                    .Where(x => x.paa_BagOrder.Id == target.Id)
                    .ToList();

                var lineNo = 0;
                foreach (var bagPart in allBagParts)
                {
                    lineNo++;
                    var line = new LINE()
                    {
                        LineNo = lineNo,
                        DocumentLineNo = 1, // linje 1772-1781 ingen idé om hvad pointen er med det regnestykke?
                        DocumentItemNo = 2, // Aner ikke hvad logikken er linje 1790 - tror det er noget varekort i nav, jvf dummy
                        Quantities = new Quantities()
                        {
                            DocumentQuantity = bagPart.paa_LengthMeasurement.GetValueOrDefault()
                        },
                        DocumentUnitOfMeasure = "M", //der er noget logik her, linje 1794
                        Description = "", //Logik jeg ikke kan gennemskue, se XML filer
                        LineDiscount = "", //Ikke sikker på logikken, linje 1805
                        JobTaskNo = new object(), //Ved ikke om det her er rigtigt
                        Customized = new Customized()
                        {
                            DocumentType = 2,
                            // Logik til <Top>XML linje 1909-1914
                            // Logik til <End>XML linje 1917-1946 - det ligner fra XML tilsend den skal ned i LINE?
                            // Logik til <Document_Line_Relining_Date> og <Document_Line_Relining_Tome> line 1949-1952
                            // linje 1824, hvis multiId == "" så indsættes installation number?
                            // linje 1827-1833 noget mere logik jeg ikke kan gennemskue
                            //international logik linje 1836-1840
                        }
                    };
                    documentLine.LINE.Add(line);
                }
                return documentLine;
            }
        }
        
        private List<Party> GetPartyList(paa_BagOrder target)
        {
            var partyListToReturn = new List<Party>();
            var fromParty = new Party()
            {
                PartyCode = "BUY-FROM",
                VATRegistrationNo = 37542784.ToString(),
                Name = "Per Aarsleff A/S",
                Name2 = "Imprægneringsfabrik",
                Address = "Birkemosevej 9",
                Address2 = "",
                PostCode = "8361",
                City = "Hasselager City",
                CountryRegionCode = "DK"
            };

            var sellToParty = new Party()
            {
                PartyCode = "SELL-TO",
                EndPoint = "ROR" + "Internkundenummer her ", // Jeg tror det er logikken bag
                VATRegistrationNo = "RB" + "Internkundenummer her ", // Jeg tror det er logikken bag
                Name = "", // I tvivl om hvor på formen det hentes fra
                Name2 = "", // I tvivl om hvor på formen det hentes fra
                PostCode = "0000", // I tvivl om hvor på formen det hentes fra
                City = "", // I tvivl om hvor på formen det hentes fra
                CountryRegionCode =
                    "DK", //DK til POC, er i tvivl om hvor på formen det hentes fra - der er logic i linje 2404-2408
                OthIdentification = "Internkundenummer her ", // Jeg tror det er logikken bag
            };

            var shipToParty = new Party()
            {
                PartyCode = "SHIP-TO",
                Name = "", //Hvis kunden på bestilling er Olimb Rørfornying As er name = Olimb Rørfornying A ellers Per Aarsleff se linte 2419-2424
                Name2 = "",
                Address = target.paa_AdressOfDelivery,
                Address2 = "",
                PostCode = target.paa_PostalCode,
                City = target.paa_City,
                CountryRegionCode = "DK", // Logik i linje 2431-2444 - til POC tror jeg DK er nok
                Contact = "Projectnummer" + "/" + _shortname +
                          "Hvis multiID ikke har værdi anvendes installationsnummer(findes på posebestilling)", //Noget logik med multiid i koden - 2340-2342
                OthIdentification = "DK" // Logik 2450-2454, tror DK er fint for POC
            };
            
            partyListToReturn.Add(fromParty);
            partyListToReturn.Add(sellToParty);
            partyListToReturn.Add(shipToParty);

            return partyListToReturn;
        }

        /// <summary>
        /// Creates the email
        /// </summary>
        /// <returns></returns>
        private string GetEmail()
        { // Der er noget lpgik, linje 2302-2310, som ikke 100% er med
            using (var context = new Xrm(orgAdminService))
            {
                if (_shortname == null) //hvis shortname er null
                {
                    return "no_email@aarsleff.com";
                }
                return _shortname + "@aarsleff.com"; //igen, skal være shortname
            }
        }

        /// <summary>
        /// Gets the relevant projectdetails
        /// </summary>
        /// <param name="projectId"></param>
        /// <returns></returns>
        private paa_Project GetProjectDetails(Guid projectId)
        {
            using (var context = new Xrm(orgAdminService))
            {
                var projectDetails = context.paa_ProjectSet
                    .Where(p => p.paa_ProjectId == projectId)
                    .Select(s=> new paa_Project()
                    {
                        paa_SiteManager = s.paa_SiteManager, 
                        paa_ProjectNumber = s.paa_ProjectNumber, 
                        paa_InstallationNumber = s.paa_InstallationNumber,
                        paa_ProjectId = s.paa_ProjectId,//det skal være shortname/initialer og ikke id
                        paa_account = s.paa_account
                    }) 
                    .FirstOrDefault(); 

                return projectDetails; //Skal vare shortname
            }
        }

        /// <summary>
        /// Gets the name of the mobile unit chosen
        /// </summary>
        /// <param name="targetId"></param>
        /// <returns></returns>
        private string GetMobileUnitName(Guid targetId)
        {
            using (var context = new Xrm(orgAdminService))
            {
                var mobileUnit = context.paa_BagOrderSet
                    .Join(context.paa_MobileUnitSet, bo => bo.paa_MobileUnit.Id, mu => mu.paa_MobileUnitId,
                        (bo, mu) => new { baOr = bo, moUn = mu })
                    .Where(x => x.baOr.paa_BagOrderId == targetId)
                    .Select(n => n.moUn.paa_Name)
                    .FirstOrDefault();
                return mobileUnit;
            }
        }

        private string GetDocumentLineNo(string documentIdentifier)
        {
            switch (documentIdentifier)
            {
                case "TOPINVERSION-STEAM": return "2";
                case "TOPINVERSION-WATER": return "2";
                case "TOPINVERSION-NOWRAP" : return "2";
                case "BOTTOMINVERSION": return "2";
                case "TOPFEE": return "3";
                case "INNERFOIL": return "4";
                case "SLIDEFOIL": return "5";;
                case "CLOSURE-STEAM": return "6";
                case "CLOSURE-WATER": return "6";
                case "SEWING": return "7";
                case "TESTPIPE-1": return "8";
                case "TESTPIPE-2": return "8";
                case "PACKING": return "10";
                case "LUBRICANT": return "11";
                case "PRELINER": return "12";
                case "REINFORCEDINVERSION-STEAM": return "13";
                case "REINFORCEDINVERSION-ZIP": return "13"; 
                case "REINFORCEDINVERSION-NOZIP": return "14";
                case "EXPRESSDELIVERYFEE": return "15";
                default: return"16";
            }
        }
    }
}