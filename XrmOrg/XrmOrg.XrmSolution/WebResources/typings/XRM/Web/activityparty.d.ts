declare namespace XDT {
  interface ActivityParty_Base extends WebEntity {
    activitypartyid?: string | null;
    addressused?: string | null;
    addressusedemailcolumnnumber?: number | null;
    donotemail?: boolean | null;
    donotfax?: boolean | null;
    donotphone?: boolean | null;
    donotpostalmail?: boolean | null;
    effort?: number | null;
    exchangeentryid?: string | null;
    instancetypecode?: activityparty_instancetypecode | null;
    ispartydeleted?: boolean | null;
    owningbusinessunit?: string | null;
    owninguser?: string | null;
    participationtypemask?: activityparty_participationtypemask | null;
    scheduledend?: Date | null;
    scheduledstart?: Date | null;
    versionnumber?: number | null;
  }
  interface ActivityParty_Relationships {
    partyid_account?: Account_Result | null;
    partyid_contact?: Contact_Result | null;
    partyid_systemuser?: SystemUser_Result | null;
  }
  interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
    activityid_activitypointer_bind$activitypointers?: string | null;
    activityid_appointment_bind$appointments?: string | null;
    activityid_campaignactivity_bind$campaignactivities?: string | null;
    activityid_campaignresponse_bind$campaignresponses?: string | null;
    activityid_email_bind$emails?: string | null;
    activityid_fax_bind$faxes?: string | null;
    activityid_incidentresolution_bind$incidentresolutions?: string | null;
    activityid_letter_bind$letters?: string | null;
    activityid_li_inmail_activityparty_bind$li_inmails?: string | null;
    activityid_li_message_activityparty_bind$li_messages?: string | null;
    activityid_li_pointdrivepresentationviewed_activityparty_bind$li_pointdrivepresentationvieweds?: string | null;
    activityid_msdyn_bookingalert_activityparty_bind$msdyn_bookingalerts?: string | null;
    activityid_msfp_alert_activityparty_bind$msfp_alerts?: string | null;
    activityid_msfp_surveyinvite_activityparty_bind$msfp_surveyinvites?: string | null;
    activityid_msfp_surveyresponse_activityparty_bind$msfp_surveyresponses?: string | null;
    activityid_opportunityclose_bind$opportunitycloses?: string | null;
    activityid_orderclose_bind$ordercloses?: string | null;
    activityid_phonecall_bind$phonecalls?: string | null;
    activityid_quoteclose_bind$quotecloses?: string | null;
    activityid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
    activityid_serviceappointment_bind$serviceappointments?: string | null;
    activityid_socialactivity_bind$socialactivities?: string | null;
    activityid_task_bind$tasks?: string | null;
    partyid_account_bind$accounts?: string | null;
    partyid_bulkoperation_bind$bulkoperations?: string | null;
    partyid_campaign_bind$campaigns?: string | null;
    partyid_campaignactivity_bind$campaignactivities?: string | null;
    partyid_contact_bind$contacts?: string | null;
    partyid_contract_bind$contracts?: string | null;
    partyid_entitlement_bind$entitlements?: string | null;
    partyid_equipment_bind$equipments?: string | null;
    partyid_incident_bind$incidents?: string | null;
    partyid_invoice_bind$invoices?: string | null;
    partyid_knowledgearticle_bind$knowledgearticles?: string | null;
    partyid_lead_bind$leads?: string | null;
    partyid_opportunity_bind$opportunities?: string | null;
    partyid_queue_bind$queues?: string | null;
    partyid_quote_bind$quotes?: string | null;
    partyid_salesorder_bind$salesorders?: string | null;
    partyid_systemuser_bind$systemusers?: string | null;
    resourcespecid_bind$resourcespecs?: string | null;
  }
  interface ActivityParty_Create extends ActivityParty {
  }
  interface ActivityParty_Update extends ActivityParty {
  }
  interface ActivityParty_Select {
    activityid_guid: WebAttribute<ActivityParty_Select, { activityid_guid: string | null }, { activityid_formatted?: string }>;
    activitypartyid: WebAttribute<ActivityParty_Select, { activitypartyid: string | null }, {  }>;
    addressused: WebAttribute<ActivityParty_Select, { addressused: string | null }, {  }>;
    addressusedemailcolumnnumber: WebAttribute<ActivityParty_Select, { addressusedemailcolumnnumber: number | null }, {  }>;
    donotemail: WebAttribute<ActivityParty_Select, { donotemail: boolean | null }, {  }>;
    donotfax: WebAttribute<ActivityParty_Select, { donotfax: boolean | null }, {  }>;
    donotphone: WebAttribute<ActivityParty_Select, { donotphone: boolean | null }, {  }>;
    donotpostalmail: WebAttribute<ActivityParty_Select, { donotpostalmail: boolean | null }, {  }>;
    effort: WebAttribute<ActivityParty_Select, { effort: number | null }, {  }>;
    exchangeentryid: WebAttribute<ActivityParty_Select, { exchangeentryid: string | null }, {  }>;
    instancetypecode: WebAttribute<ActivityParty_Select, { instancetypecode: activityparty_instancetypecode | null }, { instancetypecode_formatted?: string }>;
    ispartydeleted: WebAttribute<ActivityParty_Select, { ispartydeleted: boolean | null }, {  }>;
    ownerid_guid: WebAttribute<ActivityParty_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit: WebAttribute<ActivityParty_Select, { owningbusinessunit: string | null }, {  }>;
    owninguser: WebAttribute<ActivityParty_Select, { owninguser: string | null }, {  }>;
    participationtypemask: WebAttribute<ActivityParty_Select, { participationtypemask: activityparty_participationtypemask | null }, { participationtypemask_formatted?: string }>;
    partyid_guid: WebAttribute<ActivityParty_Select, { partyid_guid: string | null }, { partyid_formatted?: string }>;
    resourcespecid_guid: WebAttribute<ActivityParty_Select, { resourcespecid_guid: string | null }, { resourcespecid_formatted?: string }>;
    scheduledend: WebAttribute<ActivityParty_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
    scheduledstart: WebAttribute<ActivityParty_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
    versionnumber: WebAttribute<ActivityParty_Select, { versionnumber: number | null }, {  }>;
  }
  interface ActivityParty_Filter {
    activityid_guid: XQW.Guid;
    activitypartyid: XQW.Guid;
    addressused: string;
    addressusedemailcolumnnumber: number;
    donotemail: boolean;
    donotfax: boolean;
    donotphone: boolean;
    donotpostalmail: boolean;
    effort: number;
    exchangeentryid: string;
    instancetypecode: activityparty_instancetypecode;
    ispartydeleted: boolean;
    ownerid_guid: XQW.Guid;
    owningbusinessunit: XQW.Guid;
    owninguser: XQW.Guid;
    participationtypemask: activityparty_participationtypemask;
    partyid_guid: XQW.Guid;
    resourcespecid_guid: XQW.Guid;
    scheduledend: Date;
    scheduledstart: Date;
    versionnumber: number;
  }
  interface ActivityParty_Expand {
    partyid_account: WebExpand<ActivityParty_Expand, Account_Select, Account_Filter, { partyid_account: Account_Result }>;
    partyid_contact: WebExpand<ActivityParty_Expand, Contact_Select, Contact_Filter, { partyid_contact: Contact_Result }>;
    partyid_systemuser: WebExpand<ActivityParty_Expand, SystemUser_Select, SystemUser_Filter, { partyid_systemuser: SystemUser_Result }>;
  }
  interface ActivityParty_FormattedResult {
    activityid_formatted?: string;
    instancetypecode_formatted?: string;
    ownerid_formatted?: string;
    participationtypemask_formatted?: string;
    partyid_formatted?: string;
    resourcespecid_formatted?: string;
    scheduledend_formatted?: string;
    scheduledstart_formatted?: string;
  }
  interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
    "@odata.etag": string;
    activityid_guid: string | null;
    ownerid_guid: string | null;
    partyid_guid: string | null;
    resourcespecid_guid: string | null;
  }
  interface ActivityParty_RelatedOne {
    partyid_account: WebMappingRetrieve<XDT.Account_Select,XDT.Account_Expand,XDT.Account_Filter,XDT.Account_Fixed,XDT.Account_Result,XDT.Account_FormattedResult>;
    partyid_contact: WebMappingRetrieve<XDT.Contact_Select,XDT.Contact_Expand,XDT.Contact_Filter,XDT.Contact_Fixed,XDT.Contact_Result,XDT.Contact_FormattedResult>;
    partyid_systemuser: WebMappingRetrieve<XDT.SystemUser_Select,XDT.SystemUser_Expand,XDT.SystemUser_Filter,XDT.SystemUser_Fixed,XDT.SystemUser_Result,XDT.SystemUser_FormattedResult>;
  }
  interface ActivityParty_RelatedMany {
  }
}
interface WebEntitiesRetrieve {
  activityparties: WebMappingRetrieve<XDT.ActivityParty_Select,XDT.ActivityParty_Expand,XDT.ActivityParty_Filter,XDT.ActivityParty_Fixed,XDT.ActivityParty_Result,XDT.ActivityParty_FormattedResult>;
}
interface WebEntitiesRelated {
  activityparties: WebMappingRelated<XDT.ActivityParty_RelatedOne,XDT.ActivityParty_RelatedMany>;
}
interface WebEntitiesCUDA {
  activityparties: WebMappingCUDA<XDT.ActivityParty_Create,XDT.ActivityParty_Update,XDT.ActivityParty_Select>;
}
