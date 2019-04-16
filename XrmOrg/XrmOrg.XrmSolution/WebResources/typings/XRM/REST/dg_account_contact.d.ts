/// <reference path="../_internal/sdk.d.ts" />
/// <reference path="../dg.xrmquery.rest.d.ts" />
/// <reference path="../_internal/rest-entities.d.ts" />
/// <reference path="../_internal/EntityEnum/dg_account_contact.d.ts" />
declare namespace RestAPI {
  interface dg_account_contactBase extends RestEntity {
    accountid?: string | null;
    VersionNumber?: number | null;
    contactid?: string | null;
    dg_account_contactId?: string | null;
  }
  interface dg_account_contact extends dg_account_contactBase {
    dg_account_contact?: Contact[] | null;
  }
  interface dg_account_contactResult extends dg_account_contactBase {
    dg_account_contact?: SDK.Results<ContactResult> | null;
  }
  interface dg_account_contact_Select extends dg_account_contact_Expand {
    accountid: RestAttribute<dg_account_contact_Select>;
    VersionNumber: RestAttribute<dg_account_contact_Select>;
    contactid: RestAttribute<dg_account_contact_Select>;
    dg_account_contactId: RestAttribute<dg_account_contact_Select>;
  }
  interface dg_account_contact_Filter {
    accountid: XQR.Guid;
    VersionNumber: number;
    contactid: XQR.Guid;
    dg_account_contactId: XQR.Guid;
  }
  interface dg_account_contact_Expand {
    dg_account_contact: RestExpand<dg_account_contact_Select,Contact_Select>;
  }
}
interface RestEntities {
  dg_account_contact: RestMapping<RestAPI.dg_account_contact,RestAPI.dg_account_contact_Select,RestAPI.dg_account_contact_Expand,RestAPI.dg_account_contact_Filter,RestAPI.dg_account_contactResult>;
}
