declare namespace XDT {
  interface dg_account_account_Base extends WebEntity {
    accountidone?: string | null;
    accountidtwo?: string | null;
    dg_account_accountid?: string | null;
    versionnumber?: number | null;
  }
  interface dg_account_account_Relationships {
    dg_account_account?: Account_Result[] | null;
  }
  interface dg_account_account extends dg_account_account_Base, dg_account_account_Relationships {
  }
  interface dg_account_account_Create extends dg_account_account {
  }
  interface dg_account_account_Update extends dg_account_account {
  }
  interface dg_account_account_Select {
    accountidone: WebAttribute<dg_account_account_Select, { accountidone: string | null }, {  }>;
    accountidtwo: WebAttribute<dg_account_account_Select, { accountidtwo: string | null }, {  }>;
    dg_account_accountid: WebAttribute<dg_account_account_Select, { dg_account_accountid: string | null }, {  }>;
    versionnumber: WebAttribute<dg_account_account_Select, { versionnumber: number | null }, {  }>;
  }
  interface dg_account_account_Filter {
    accountidone: XQW.Guid;
    accountidtwo: XQW.Guid;
    dg_account_accountid: XQW.Guid;
    versionnumber: number;
  }
  interface dg_account_account_Expand {
    dg_account_account: WebExpand<dg_account_account_Expand, Account_Select, Account_Filter, { dg_account_account: Account_Result[] }>;
  }
  interface dg_account_account_FormattedResult {
  }
  interface dg_account_account_Result extends dg_account_account_Base, dg_account_account_Relationships {
    "@odata.etag": string;
  }
  interface dg_account_account_RelatedOne {
  }
  interface dg_account_account_RelatedMany {
    dg_account_account: WebMappingRetrieve<XDT.Account_Select,XDT.Account_Expand,XDT.Account_Filter,XDT.Account_Fixed,XDT.Account_Result,XDT.Account_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  dg_account_accountset: WebMappingRetrieve<XDT.dg_account_account_Select,XDT.dg_account_account_Expand,XDT.dg_account_account_Filter,XDT.dg_account_account_Fixed,XDT.dg_account_account_Result,XDT.dg_account_account_FormattedResult>;
}
interface WebEntitiesRelated {
  dg_account_accountset: WebMappingRelated<XDT.dg_account_account_RelatedOne,XDT.dg_account_account_RelatedMany>;
}
interface WebEntitiesCUDA {
  dg_account_accountset: WebMappingCUDA<XDT.dg_account_account_Create,XDT.dg_account_account_Update,XDT.dg_account_account_Select>;
}
