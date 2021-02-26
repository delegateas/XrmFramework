declare namespace XDT {
  interface dg_account_contact_Base extends WebEntity {
    accountid?: string | null;
    contactid?: string | null;
    dg_account_contactid?: string | null;
    versionnumber?: number | null;
  }
  interface dg_account_contact_Relationships {
    dg_account_contact?: Contact_Result[] | null;
  }
  interface dg_account_contact extends dg_account_contact_Base, dg_account_contact_Relationships {
  }
  interface dg_account_contact_Create extends dg_account_contact {
  }
  interface dg_account_contact_Update extends dg_account_contact {
  }
  interface dg_account_contact_Select {
    accountid: WebAttribute<dg_account_contact_Select, { accountid: string | null }, {  }>;
    contactid: WebAttribute<dg_account_contact_Select, { contactid: string | null }, {  }>;
    dg_account_contactid: WebAttribute<dg_account_contact_Select, { dg_account_contactid: string | null }, {  }>;
    versionnumber: WebAttribute<dg_account_contact_Select, { versionnumber: number | null }, {  }>;
  }
  interface dg_account_contact_Filter {
    accountid: XQW.Guid;
    contactid: XQW.Guid;
    dg_account_contactid: XQW.Guid;
    versionnumber: number;
  }
  interface dg_account_contact_Expand {
    dg_account_contact: WebExpand<dg_account_contact_Expand, Contact_Select, Contact_Filter, { dg_account_contact: Contact_Result[] }>;
  }
  interface dg_account_contact_FormattedResult {
  }
  interface dg_account_contact_Result extends dg_account_contact_Base, dg_account_contact_Relationships {
    "@odata.etag": string;
  }
  interface dg_account_contact_RelatedOne {
  }
  interface dg_account_contact_RelatedMany {
    dg_account_contact: WebMappingRetrieve<XDT.Contact_Select,XDT.Contact_Expand,XDT.Contact_Filter,XDT.Contact_Fixed,XDT.Contact_Result,XDT.Contact_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  dg_account_contactset: WebMappingRetrieve<XDT.dg_account_contact_Select,XDT.dg_account_contact_Expand,XDT.dg_account_contact_Filter,XDT.dg_account_contact_Fixed,XDT.dg_account_contact_Result,XDT.dg_account_contact_FormattedResult>;
}
interface WebEntitiesRelated {
  dg_account_contactset: WebMappingRelated<XDT.dg_account_contact_RelatedOne,XDT.dg_account_contact_RelatedMany>;
}
interface WebEntitiesCUDA {
  dg_account_contactset: WebMappingCUDA<XDT.dg_account_contact_Create,XDT.dg_account_contact_Update,XDT.dg_account_contact_Select>;
}
