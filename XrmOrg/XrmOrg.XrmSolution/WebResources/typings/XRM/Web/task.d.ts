/// <reference path="../_internal/web-entities.d.ts" />
/// <reference path="../_internal/EntityEnum/task.d.ts" />
declare namespace WebAPI {
  interface Task_Base extends WebEntity {
    activityadditionalparams?: string | null;
    activityid?: string | null;
    activitytypecode?: string | null;
    actualdurationminutes?: number | null;
    actualend?: Date | null;
    actualstart?: Date | null;
    category?: string | null;
    createdon?: Date | null;
    crmtaskassigneduniqueid?: string | null;
    description?: string | null;
    exchangerate?: string | null;
    importsequencenumber?: number | null;
    isbilled?: boolean | null;
    isregularactivity?: boolean | null;
    isworkflowcreated?: boolean | null;
    lastonholdtime?: Date | null;
    modifiedon?: Date | null;
    onholdtime?: number | null;
    overriddencreatedon?: Date | null;
    percentcomplete?: number | null;
    prioritycode?: task_prioritycode | null;
    processid?: string | null;
    scheduleddurationminutes?: number | null;
    scheduledend?: Date | null;
    scheduledstart?: Date | null;
    stageid?: string | null;
    statecode?: task_statecode | null;
    statuscode?: task_statuscode | null;
    subcategory?: string | null;
    subject?: string | null;
    subscriptionid?: string | null;
    timezoneruleversionnumber?: number | null;
    traversedpath?: string | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface Task_Relationships {
    regardingobjectid_account_task?: Account_Result | null;
    regardingobjectid_contact_task?: Contact_Result | null;
  }
  interface Task extends Task_Base, Task_Relationships {
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    regardingobjectid_bind$accounts?: string | null;
    regardingobjectid_bind$bookableresourcebookingheaders?: string | null;
    regardingobjectid_bind$bookableresourcebookings?: string | null;
    regardingobjectid_bind$campaignactivities?: string | null;
    regardingobjectid_bind$campaigns?: string | null;
    regardingobjectid_bind$contacts?: string | null;
    regardingobjectid_bind$contracts?: string | null;
    regardingobjectid_bind$dg_events?: string | null;
    regardingobjectid_bind$dg_participants?: string | null;
    regardingobjectid_bind$entitlements?: string | null;
    regardingobjectid_bind$entitlementtemplates?: string | null;
    regardingobjectid_bind$incidents?: string | null;
    regardingobjectid_bind$invoices?: string | null;
    regardingobjectid_bind$knowledgearticles?: string | null;
    regardingobjectid_bind$knowledgebaserecords?: string | null;
    regardingobjectid_bind$leads?: string | null;
    regardingobjectid_bind$msdyn_postalbums?: string | null;
    regardingobjectid_bind$opportunities?: string | null;
    regardingobjectid_bind$quotes?: string | null;
    regardingobjectid_bind$salesorders?: string | null;
    serviceid_bind$services?: string | null;
    slaid_bind$slas?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface Task_Create extends Task {
  }
  interface Task_Update extends Task {
  }
  interface Task_Select {
    activityadditionalparams: WebAttribute<Task_Select, { activityadditionalparams: string | null }, {  }>;
    activityid: WebAttribute<Task_Select, { activityid: string | null }, {  }>;
    activitytypecode: WebAttribute<Task_Select, { activitytypecode: string | null }, {  }>;
    actualdurationminutes: WebAttribute<Task_Select, { actualdurationminutes: number | null }, {  }>;
    actualend: WebAttribute<Task_Select, { actualend: Date | null }, { actualend_formatted?: string }>;
    actualstart: WebAttribute<Task_Select, { actualstart: Date | null }, { actualstart_formatted?: string }>;
    category: WebAttribute<Task_Select, { category: string | null }, {  }>;
    createdby_guid: WebAttribute<Task_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<Task_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<Task_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    crmtaskassigneduniqueid: WebAttribute<Task_Select, { crmtaskassigneduniqueid: string | null }, {  }>;
    description: WebAttribute<Task_Select, { description: string | null }, {  }>;
    exchangerate: WebAttribute<Task_Select, { exchangerate: string | null }, {  }>;
    importsequencenumber: WebAttribute<Task_Select, { importsequencenumber: number | null }, {  }>;
    isbilled: WebAttribute<Task_Select, { isbilled: boolean | null }, {  }>;
    isregularactivity: WebAttribute<Task_Select, { isregularactivity: boolean | null }, {  }>;
    isworkflowcreated: WebAttribute<Task_Select, { isworkflowcreated: boolean | null }, {  }>;
    lastonholdtime: WebAttribute<Task_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
    modifiedby_guid: WebAttribute<Task_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<Task_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<Task_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    onholdtime: WebAttribute<Task_Select, { onholdtime: number | null }, {  }>;
    overriddencreatedon: WebAttribute<Task_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<Task_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<Task_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<Task_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<Task_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    percentcomplete: WebAttribute<Task_Select, { percentcomplete: number | null }, {  }>;
    prioritycode: WebAttribute<Task_Select, { prioritycode: task_prioritycode | null }, { prioritycode_formatted?: string }>;
    processid: WebAttribute<Task_Select, { processid: string | null }, {  }>;
    regardingobjectid_guid: WebAttribute<Task_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
    scheduleddurationminutes: WebAttribute<Task_Select, { scheduleddurationminutes: number | null }, {  }>;
    scheduledend: WebAttribute<Task_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
    scheduledstart: WebAttribute<Task_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
    serviceid_guid: WebAttribute<Task_Select, { serviceid_guid: string | null }, { serviceid_formatted?: string }>;
    slaid_guid: WebAttribute<Task_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
    slainvokedid_guid: WebAttribute<Task_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
    stageid: WebAttribute<Task_Select, { stageid: string | null }, {  }>;
    statecode: WebAttribute<Task_Select, { statecode: task_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<Task_Select, { statuscode: task_statuscode | null }, { statuscode_formatted?: string }>;
    subcategory: WebAttribute<Task_Select, { subcategory: string | null }, {  }>;
    subject: WebAttribute<Task_Select, { subject: string | null }, {  }>;
    subscriptionid: WebAttribute<Task_Select, { subscriptionid: string | null }, {  }>;
    timezoneruleversionnumber: WebAttribute<Task_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<Task_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    traversedpath: WebAttribute<Task_Select, { traversedpath: string | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<Task_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<Task_Select, { versionnumber: number | null }, {  }>;
  }
  interface Task_Filter {
    activityadditionalparams: string;
    activityid: XQW.Guid;
    activitytypecode: string;
    actualdurationminutes: number;
    actualend: Date;
    actualstart: Date;
    category: string;
    createdby: string;
    createdon: Date;
    createdonbehalfby: string;
    crmtaskassigneduniqueid: XQW.Guid;
    description: string;
    exchangerate: string;
    importsequencenumber: number;
    isbilled: boolean;
    isregularactivity: boolean;
    isworkflowcreated: boolean;
    lastonholdtime: Date;
    modifiedby: string;
    modifiedon: Date;
    modifiedonbehalfby: string;
    onholdtime: number;
    overriddencreatedon: Date;
    ownerid: string;
    owningbusinessunit: string;
    owningteam: string;
    owninguser: string;
    percentcomplete: number;
    prioritycode: task_prioritycode;
    processid: XQW.Guid;
    regardingobjectid: string;
    scheduleddurationminutes: number;
    scheduledend: Date;
    scheduledstart: Date;
    serviceid: string;
    slaid: string;
    slainvokedid: string;
    stageid: XQW.Guid;
    statecode: task_statecode;
    statuscode: task_statuscode;
    subcategory: string;
    subject: string;
    subscriptionid: XQW.Guid;
    timezoneruleversionnumber: number;
    transactioncurrencyid: string;
    traversedpath: string;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface Task_Expand {
    regardingobjectid_account_task: WebExpand<Task_Expand, Account_Select, Account_Filter, { regardingobjectid_account_task: Account_Result }>;
    regardingobjectid_contact_task: WebExpand<Task_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact_task: Contact_Result }>;
  }
  interface Task_FormattedResult {
    actualend_formatted?: string;
    actualstart_formatted?: string;
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    lastonholdtime_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    prioritycode_formatted?: string;
    regardingobjectid_formatted?: string;
    scheduledend_formatted?: string;
    scheduledstart_formatted?: string;
    serviceid_formatted?: string;
    slaid_formatted?: string;
    slainvokedid_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
  }
  interface Task_Result extends Task_Base, Task_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    regardingobjectid_guid: string | null;
    serviceid_guid: string | null;
    slaid_guid: string | null;
    slainvokedid_guid: string | null;
    transactioncurrencyid_guid: string | null;
  }
  interface Task_RelatedOne {
    regardingobjectid_account_task: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
    regardingobjectid_contact_task: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  }
  interface Task_RelatedMany {
  }
}
interface WebEntities {
  tasks: WebMappingRetrieve<WebAPI.Task_Select,WebAPI.Task_Expand,WebAPI.Task_Filter,WebAPI.Task_Fixed,WebAPI.Task_Result,WebAPI.Task_FormattedResult> & WebMappingCUD<WebAPI.Task_Create,WebAPI.Task_Update> & WebMappingRelated<WebAPI.Task_RelatedOne,WebAPI.Task_RelatedMany>;
}
