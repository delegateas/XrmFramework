/// <reference path="../_internal/web-entities.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_account_contact.d.ts" />
declare namespace WebAPI {
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
    dg_account_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  }
}
interface WebEntities {
  dg_account_contactset: WebMappingRetrieve<WebAPI.dg_account_contact_Select,WebAPI.dg_account_contact_Expand,WebAPI.dg_account_contact_Filter,WebAPI.dg_account_contact_Fixed,WebAPI.dg_account_contact_Result,WebAPI.dg_account_contact_FormattedResult> & WebMappingCUD<WebAPI.dg_account_contact_Create,WebAPI.dg_account_contact_Update> & WebMappingRelated<WebAPI.dg_account_contact_RelatedOne,WebAPI.dg_account_contact_RelatedMany>;
}
