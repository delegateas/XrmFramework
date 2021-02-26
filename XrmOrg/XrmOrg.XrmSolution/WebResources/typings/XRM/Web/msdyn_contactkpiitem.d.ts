declare namespace XDT {
  interface msdyn_contactkpiitem_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    msdyn_acilastupdatetimestamp?: Date | null;
    msdyn_contactkpiitemid?: string | null;
    msdyn_emailattachmentopens?: number | null;
    msdyn_emaillinksclicked?: number | null;
    msdyn_emailsreceived?: number | null;
    msdyn_emailssent?: number | null;
    msdyn_meetingsreceived?: number | null;
    msdyn_meetingssent?: number | null;
    msdyn_name?: string | null;
    msdyn_numberofopportunities?: number | null;
    msdyn_openedemails?: number | null;
    msdyn_phonecallsmade?: number | null;
    msdyn_phonecallsreceived?: number | null;
    msdyn_relationshiphealthscorestate?: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthscorestate | null;
    msdyn_relationshiphealthscorevalue?: number | null;
    msdyn_relationshiphealthtrend?: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthtrend | null;
    msdyn_timespentbycustomer?: number | null;
    msdyn_timespentbycustomer_calculated?: number | null;
    msdyn_timespentbyteam?: number | null;
    msdyn_timespentbyteam_calculated?: number | null;
    overriddencreatedon?: Date | null;
    statecode?: msdyn_contactkpiitem_statecode | null;
    statuscode?: msdyn_contactkpiitem_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface msdyn_contactkpiitem_Relationships {
    msdyn_msdyn_contactkpiitem_contact_contactkpiid?: Contact_Result[] | null;
  }
  interface msdyn_contactkpiitem extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
    msdyn_contactid_bind$contacts?: string | null;
  }
  interface msdyn_contactkpiitem_Create extends msdyn_contactkpiitem {
  }
  interface msdyn_contactkpiitem_Update extends msdyn_contactkpiitem {
  }
  interface msdyn_contactkpiitem_Select {
    createdby_guid: WebAttribute<msdyn_contactkpiitem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<msdyn_contactkpiitem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<msdyn_contactkpiitem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<msdyn_contactkpiitem_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<msdyn_contactkpiitem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<msdyn_contactkpiitem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<msdyn_contactkpiitem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    msdyn_acilastupdatetimestamp: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_acilastupdatetimestamp: Date | null }, { msdyn_acilastupdatetimestamp_formatted?: string }>;
    msdyn_contactid_guid: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_contactid_guid: string | null }, { msdyn_contactid_formatted?: string }>;
    msdyn_contactkpiitemid: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_contactkpiitemid: string | null }, {  }>;
    msdyn_emailattachmentopens: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_emailattachmentopens: number | null }, {  }>;
    msdyn_emaillinksclicked: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_emaillinksclicked: number | null }, {  }>;
    msdyn_emailsreceived: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_emailsreceived: number | null }, {  }>;
    msdyn_emailssent: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_emailssent: number | null }, {  }>;
    msdyn_meetingsreceived: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_meetingsreceived: number | null }, {  }>;
    msdyn_meetingssent: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_meetingssent: number | null }, {  }>;
    msdyn_name: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_name: string | null }, {  }>;
    msdyn_numberofopportunities: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_numberofopportunities: number | null }, {  }>;
    msdyn_openedemails: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_openedemails: number | null }, {  }>;
    msdyn_phonecallsmade: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_phonecallsmade: number | null }, {  }>;
    msdyn_phonecallsreceived: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_phonecallsreceived: number | null }, {  }>;
    msdyn_relationshiphealthscorestate: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_relationshiphealthscorestate: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthscorestate | null }, { msdyn_relationshiphealthscorestate_formatted?: string }>;
    msdyn_relationshiphealthscorevalue: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_relationshiphealthscorevalue: number | null }, {  }>;
    msdyn_relationshiphealthtrend: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_relationshiphealthtrend: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthtrend | null }, { msdyn_relationshiphealthtrend_formatted?: string }>;
    msdyn_timespentbycustomer: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_timespentbycustomer: number | null }, {  }>;
    msdyn_timespentbycustomer_calculated: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_timespentbycustomer_calculated: number | null }, {  }>;
    msdyn_timespentbyteam: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_timespentbyteam: number | null }, {  }>;
    msdyn_timespentbyteam_calculated: WebAttribute<msdyn_contactkpiitem_Select, { msdyn_timespentbyteam_calculated: number | null }, {  }>;
    organizationid_guid: WebAttribute<msdyn_contactkpiitem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
    overriddencreatedon: WebAttribute<msdyn_contactkpiitem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    statecode: WebAttribute<msdyn_contactkpiitem_Select, { statecode: msdyn_contactkpiitem_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<msdyn_contactkpiitem_Select, { statuscode: msdyn_contactkpiitem_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<msdyn_contactkpiitem_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<msdyn_contactkpiitem_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<msdyn_contactkpiitem_Select, { versionnumber: number | null }, {  }>;
  }
  interface msdyn_contactkpiitem_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    msdyn_acilastupdatetimestamp: Date;
    msdyn_contactid_guid: XQW.Guid;
    msdyn_contactkpiitemid: XQW.Guid;
    msdyn_emailattachmentopens: any;
    msdyn_emaillinksclicked: any;
    msdyn_emailsreceived: number;
    msdyn_emailssent: number;
    msdyn_meetingsreceived: number;
    msdyn_meetingssent: number;
    msdyn_name: string;
    msdyn_numberofopportunities: number;
    msdyn_openedemails: any;
    msdyn_phonecallsmade: number;
    msdyn_phonecallsreceived: number;
    msdyn_relationshiphealthscorestate: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthscorestate;
    msdyn_relationshiphealthscorevalue: number;
    msdyn_relationshiphealthtrend: msdyn_msdyn_contactkpiitem_msdyn_relationshiphealthtrend;
    msdyn_timespentbycustomer: number;
    msdyn_timespentbycustomer_calculated: any;
    msdyn_timespentbyteam: number;
    msdyn_timespentbyteam_calculated: any;
    organizationid_guid: XQW.Guid;
    overriddencreatedon: Date;
    statecode: msdyn_contactkpiitem_statecode;
    statuscode: msdyn_contactkpiitem_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface msdyn_contactkpiitem_Expand {
    createdby: WebExpand<msdyn_contactkpiitem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
    createdonbehalfby: WebExpand<msdyn_contactkpiitem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
    modifiedby: WebExpand<msdyn_contactkpiitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
    modifiedonbehalfby: WebExpand<msdyn_contactkpiitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
    msdyn_contactid: WebExpand<msdyn_contactkpiitem_Expand, Contact_Select, Contact_Filter, { msdyn_contactid: Contact_Result }>;
    msdyn_msdyn_contactkpiitem_contact_contactkpiid: WebExpand<msdyn_contactkpiitem_Expand, Contact_Select, Contact_Filter, { msdyn_msdyn_contactkpiitem_contact_contactkpiid: Contact_Result[] }>;
  }
  interface msdyn_contactkpiitem_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    msdyn_acilastupdatetimestamp_formatted?: string;
    msdyn_contactid_formatted?: string;
    msdyn_relationshiphealthscorestate_formatted?: string;
    msdyn_relationshiphealthtrend_formatted?: string;
    organizationid_formatted?: string;
    overriddencreatedon_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
  }
  interface msdyn_contactkpiitem_Result extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    msdyn_contactid_guid: string | null;
    organizationid_guid: string | null;
  }
  interface msdyn_contactkpiitem_RelatedOne {
    createdby: WebMappingRetrieve<XDT.SystemUser_Select,XDT.SystemUser_Expand,XDT.SystemUser_Filter,XDT.SystemUser_Fixed,XDT.SystemUser_Result,XDT.SystemUser_FormattedResult>;
    createdonbehalfby: WebMappingRetrieve<XDT.SystemUser_Select,XDT.SystemUser_Expand,XDT.SystemUser_Filter,XDT.SystemUser_Fixed,XDT.SystemUser_Result,XDT.SystemUser_FormattedResult>;
    modifiedby: WebMappingRetrieve<XDT.SystemUser_Select,XDT.SystemUser_Expand,XDT.SystemUser_Filter,XDT.SystemUser_Fixed,XDT.SystemUser_Result,XDT.SystemUser_FormattedResult>;
    modifiedonbehalfby: WebMappingRetrieve<XDT.SystemUser_Select,XDT.SystemUser_Expand,XDT.SystemUser_Filter,XDT.SystemUser_Fixed,XDT.SystemUser_Result,XDT.SystemUser_FormattedResult>;
    msdyn_contactid: WebMappingRetrieve<XDT.Contact_Select,XDT.Contact_Expand,XDT.Contact_Filter,XDT.Contact_Fixed,XDT.Contact_Result,XDT.Contact_FormattedResult>;
  }
  interface msdyn_contactkpiitem_RelatedMany {
    msdyn_msdyn_contactkpiitem_contact_contactkpiid: WebMappingRetrieve<XDT.Contact_Select,XDT.Contact_Expand,XDT.Contact_Filter,XDT.Contact_Fixed,XDT.Contact_Result,XDT.Contact_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  msdyn_contactkpiitems: WebMappingRetrieve<XDT.msdyn_contactkpiitem_Select,XDT.msdyn_contactkpiitem_Expand,XDT.msdyn_contactkpiitem_Filter,XDT.msdyn_contactkpiitem_Fixed,XDT.msdyn_contactkpiitem_Result,XDT.msdyn_contactkpiitem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_contactkpiitems: WebMappingRelated<XDT.msdyn_contactkpiitem_RelatedOne,XDT.msdyn_contactkpiitem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_contactkpiitems: WebMappingCUDA<XDT.msdyn_contactkpiitem_Create,XDT.msdyn_contactkpiitem_Update,XDT.msdyn_contactkpiitem_Select>;
}
