using System;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace DG.XrmOrg.XrmSolution.Plugins.DTO
{
	// using System.Xml.Serialization;
// XmlSerializer serializer = new XmlSerializer(typeof(DOCUMENT));
// using (StringReader reader = new StringReader(xml))
// {
//    var test = (DOCUMENT)serializer.Deserialize(reader);
// }

	[XmlRoot(ElementName = "Dates")]
	public class Dates
	{
		[XmlElement(ElementName = "Document_Date")]
		public string DocumentDate { get; set; }
	}

	[XmlRoot(ElementName = "Reference")]
	public class Reference
	{

		[XmlElement(ElementName = "Customer_Reference")]
		public string CustomerReference { get; set; }
	}

	[XmlRoot(ElementName = "Party")]
	public class Party
	{

		[XmlElement(ElementName = "Party_Code")]
		public string PartyCode { get; set; }

		[XmlElement(ElementName = "VAT_Registration_No_")]
		public string VATRegistrationNo { get; set; }

		[XmlElement(ElementName = "Name")] public string Name { get; set; }

		[XmlElement(ElementName = "Name_2")] public string Name2 { get; set; }

		[XmlElement(ElementName = "Address")] public string Address { get; set; }

		[XmlElement(ElementName = "Address_2")]
		public object Address2 { get; set; }

		[XmlElement(ElementName = "Post_Code")]
		public string PostCode { get; set; }

		[XmlElement(ElementName = "City")] public string City { get; set; }

		[XmlElement(ElementName = "Country_Region_Code")]
		public string CountryRegionCode { get; set; }

		[XmlElement(ElementName = "End_Point")]
		public string EndPoint { get; set; }

		[XmlElement(ElementName = "Oth_Identification")]
		public string OthIdentification { get; set; }

		[XmlElement(ElementName = "Contact")] public string Contact { get; set; }
	}

	[XmlRoot(ElementName = "Mail")]
	public class Mail
	{

		[XmlElement(ElementName = "Mail_To_-_Order_conf_")]
		public string MailToOrderConf { get; set; }
	}

	[XmlRoot(ElementName = "Customized")]
	public class Customized
	{

		[XmlElement(ElementName = "Document_Quote_No_")]
		public string DocumentQuoteNo { get; set; }

		[XmlElement(ElementName = "Document_Job_No_PA")]
		public string DocumentJobNoPA { get; set; }

		[XmlElement(ElementName = "Document_Job_Task_No_PA")]
		public object DocumentJobTaskNoPA { get; set; }

		[XmlElement(ElementName = "Document_Shortcut_Dim_2_Code")]
		public string DocumentShortcutDim2Code { get; set; }

		[XmlElement(ElementName = "Document_Installation_No_")]
		public string DocumentInstallationNo { get; set; }

		[XmlElement(ElementName = "Document_Machine_Asset_Code")]
		public string DocumentMachineAssetCode { get; set; }

		[XmlElement(ElementName = "Document_Shipment_Date")]
		public string DocumentShipmentDate { get; set; }

		[XmlElement(ElementName = "Document_Shipment_Time")]
		public string DocumentShipmentTime { get; set; }

		[XmlElement(ElementName = "Document_Delivery_Date")]
		public string DocumentDeliveryDate { get; set; }

		[XmlElement(ElementName = "Document_Delivery_Time")]
		public string DocumentDeliveryTime { get; set; }

		[XmlElement(ElementName = "Document_Relining_Date")]
		public string DocumentReliningDate { get; set; }

		[XmlElement(ElementName = "Document_Relining_Time")]
		public object DocumentReliningTime { get; set; }

		[XmlElement(ElementName = "Document_Relining_Method")]
		public string DocumentReliningMethod { get; set; }

		[XmlElement(ElementName = "Remark_Delivery_Regulatory")]
		public string RemarkDeliveryRegulatory { get; set; }

		[XmlElement(ElementName = "Remark_Discount")]
		public object RemarkDiscount { get; set; }
		
		[XmlElement(ElementName = "Document_Instalation_Start_No")]
		public string DocumentInstalationStartNo { get; set; }
		
		[XmlElement(ElementName = "Document_Instalation_End_No")]
		public string DocumentInstalationEndNo { get; set; }

		[XmlElement(ElementName = "Special_Order")]
		public bool SpecialOrder { get; set; }

		[XmlElement(ElementName = "Remark_transport")]
		public object RemarkTransport { get; set; }

		[XmlElement(ElementName = "Document_Job_Customer")]
		public string DocumentJobCustomer { get; set; }

		[XmlElement(ElementName = "Design")] public string Design { get; set; }

		[XmlElement(ElementName = "Document_Type")]
		public int DocumentType { get; set; }

		[XmlElement(ElementName = "Top")] public DateTime Top { get; set; }

		[XmlElement(ElementName = "End")] public double End { get; set; }
	}

	[XmlRoot(ElementName = "DOCUMENTHEAD")]
	public class DOCUMENTHEAD
	{
		[XmlElement(ElementName = "Source_ID")]
		public string SourceID { get; set; }

		[XmlElement(ElementName = "Document_Type")]
		public string DocumentType { get; set; }

		[XmlElement(ElementName = "Document_No_")]
		public string DocumentNo { get; set; }

		[XmlElement(ElementName = "Interchange_Sender")]
		public string InterchangeSender { get; set; }

		[XmlElement(ElementName = "Interchange_Receiver")]
		public int InterchangeReceiver { get; set; }

		[XmlElement(ElementName = "Dates")] 
		public Dates Dates { get; set; }

		[XmlElement(ElementName = "Document_Currency_Code")]
		public object DocumentCurrencyCode { get; set; }

		[XmlElement(ElementName = "Contact_E-mail_at_Partner")]
		public string ContactEmailAtPartner { get; set; }

		[XmlElement(ElementName = "Contact_Name_at_Partner")]
		public object ContactNameAtPartner { get; set; }

		[XmlElement(ElementName = "Customer_Order_No_")]
		public string CustomerOrderNo { get; set; }

		[XmlElement(ElementName = "Reference")]
		public Reference Reference { get; set; }

		[XmlElement(ElementName = "Party")]
		public List<Party> Party { get; set; }

		[XmlElement(ElementName = "Mail")]
		public Mail Mail { get; set; }

		[XmlElement(ElementName = "Customized")]
		public Customized Customized { get; set; }
	}

	[XmlRoot(ElementName = "Quantities")]
	public class Quantities
	{
		[XmlElement(ElementName = "Document_Quantity")]
		public decimal DocumentQuantity { get; set; }
	}

	[XmlRoot(ElementName = "LINE")]
	public class LINE
	{
		[XmlElement(ElementName = "Line_No_")] 
		public int LineNo { get; set; }

		[XmlElement(ElementName = "Document_Line_No_")]
		public int DocumentLineNo { get; set; }

		[XmlElement(ElementName = "Document_Item_No_")]
		public int DocumentItemNo { get; set; }

		[XmlElement(ElementName = "Quantities")]
		public Quantities Quantities { get; set; }

		[XmlElement(ElementName = "Document_Unit_Of_Measure")]
		public string DocumentUnitOfMeasure { get; set; }

		[XmlElement(ElementName = "Description")]
		public string Description { get; set; }

		[XmlElement(ElementName = "Job_Task_No_")]
		public object JobTaskNo { get; set; }

		[XmlElement(ElementName = "Customized")]
		public Customized Customized { get; set; }

		[XmlElement(ElementName = "Line_Discount")]
		public object LineDiscount { get; set; }
	}

	[XmlRoot(ElementName = "DOCUMENTLINE")]
	public class DOCUMENTLINE
	{
		[XmlElement(ElementName = "LINE")] 
		public List<LINE> LINE { get; set; }
	}

	[XmlRoot(ElementName = "Tax")]
	public class Tax
	{
		[XmlElement(ElementName = "TaxBase")] 
		public object TaxBase { get; set; }

		[XmlElement(ElementName = "TaxAmount")]
		public object TaxAmount { get; set; }

		[XmlElement(ElementName = "TaxType")] 
		public object TaxType { get; set; }

		[XmlElement(ElementName = "TaxRate")] 
		public object TaxRate { get; set; }

		[XmlElement(ElementName = "TaxCategory")]
		public object TaxCategory { get; set; }
	}

	[XmlRoot(ElementName = "TaxList")]
	public class TaxList
	{
		[XmlElement(ElementName = "Tax")] public Tax Tax { get; set; }
	}

	[XmlRoot(ElementName = "DOCUMENTFOOT")]
	public class DOCUMENTFOOT
	{

		[XmlElement(ElementName = "NbrOfLines")]
		public double NbrOfLines { get; set; }

		[XmlElement(ElementName = "NbrOfQty")] 
		public object NbrOfQty { get; set; }

		[XmlElement(ElementName = "TotalAmount")]
		public object TotalAmount { get; set; }

		[XmlElement(ElementName = "TotalLineAmount")]
		public object TotalLineAmount { get; set; }

		[XmlElement(ElementName = "RoundOff")] 
		public object RoundOff { get; set; }

		[XmlElement(ElementName = "TotalDiscountAmount")]
		public object TotalDiscountAmount { get; set; }

		[XmlElement(ElementName = "TotalFee")] 
		public object TotalFee { get; set; }

		[XmlElement(ElementName = "TotalTaxBaseAmount")]
		public object TotalTaxBaseAmount { get; set; }

		[XmlElement(ElementName = "TotalTaxAmount")]
		public object TotalTaxAmount { get; set; }

		[XmlElement(ElementName = "TaxList")] 
		public TaxList TaxList { get; set; }
	}

	[XmlRoot(ElementName = "DOCUMENT")]
	public class DOCUMENT
	{
		[XmlElement(ElementName = "DOCUMENTHEAD")]
		public DOCUMENTHEAD DOCUMENTHEAD { get; set; }

		[XmlElement(ElementName = "DOCUMENTLINE")]
		public DOCUMENTLINE DOCUMENTLINE { get; set; }

		[XmlElement(ElementName = "DOCUMENTFOOT")]
		public DOCUMENTFOOT DOCUMENTFOOT { get; set; }
	}
}