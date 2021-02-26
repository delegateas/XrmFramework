interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
declare namespace XDT {
  interface WebEntity {
  }
  interface WebEntity_Fixed {
    "@odata.etag": string;
  }
  interface Account_Base extends WebEntity {
  }
  interface Account_Fixed extends WebEntity_Fixed {
    accountid: string;
  }
  interface Account extends Account_Base, Account_Relationships {
  }
  interface Account_Relationships {
  }
  interface Account_Result extends Account_Base, Account_Relationships {
  }
  interface Account_FormattedResult {
  }
  interface Account_Select {
  }
  interface Account_Expand {
  }
  interface Account_Filter {
  }
  interface Account_Create extends Account {
  }
  interface Account_Update extends Account {
  }
  interface Contact_Base extends WebEntity {
  }
  interface Contact_Fixed extends WebEntity_Fixed {
    contactid: string;
  }
  interface Contact extends Contact_Base, Contact_Relationships {
  }
  interface Contact_Relationships {
  }
  interface Contact_Result extends Contact_Base, Contact_Relationships {
  }
  interface Contact_FormattedResult {
  }
  interface Contact_Select {
  }
  interface Contact_Expand {
  }
  interface Contact_Filter {
  }
  interface Contact_Create extends Contact {
  }
  interface Contact_Update extends Contact {
  }
  interface dg_account_account_Base extends WebEntity {
  }
  interface dg_account_account_Fixed extends WebEntity_Fixed {
    dg_account_accountid: string;
  }
  interface dg_account_account extends dg_account_account_Base, dg_account_account_Relationships {
  }
  interface dg_account_account_Relationships {
  }
  interface dg_account_account_Result extends dg_account_account_Base, dg_account_account_Relationships {
  }
  interface dg_account_account_FormattedResult {
  }
  interface dg_account_account_Select {
  }
  interface dg_account_account_Expand {
  }
  interface dg_account_account_Filter {
  }
  interface dg_account_account_Create extends dg_account_account {
  }
  interface dg_account_account_Update extends dg_account_account {
  }
  interface dg_account_contact_Base extends WebEntity {
  }
  interface dg_account_contact_Fixed extends WebEntity_Fixed {
    dg_account_contactid: string;
  }
  interface dg_account_contact extends dg_account_contact_Base, dg_account_contact_Relationships {
  }
  interface dg_account_contact_Relationships {
  }
  interface dg_account_contact_Result extends dg_account_contact_Base, dg_account_contact_Relationships {
  }
  interface dg_account_contact_FormattedResult {
  }
  interface dg_account_contact_Select {
  }
  interface dg_account_contact_Expand {
  }
  interface dg_account_contact_Filter {
  }
  interface dg_account_contact_Create extends dg_account_contact {
  }
  interface dg_account_contact_Update extends dg_account_contact {
  }
  interface BulkOperationLog_Base extends WebEntity {
  }
  interface BulkOperationLog_Fixed extends WebEntity_Fixed {
    bulkoperationlogid: string;
  }
  interface BulkOperationLog extends BulkOperationLog_Base, BulkOperationLog_Relationships {
  }
  interface BulkOperationLog_Relationships {
  }
  interface BulkOperationLog_Result extends BulkOperationLog_Base, BulkOperationLog_Relationships {
  }
  interface BulkOperationLog_FormattedResult {
  }
  interface BulkOperationLog_Select {
  }
  interface BulkOperationLog_Expand {
  }
  interface BulkOperationLog_Filter {
  }
  interface BulkOperationLog_Create extends BulkOperationLog {
  }
  interface BulkOperationLog_Update extends BulkOperationLog {
  }
  interface ActivityParty_Base extends WebEntity {
  }
  interface ActivityParty_Fixed extends WebEntity_Fixed {
    activitypartyid: string;
  }
  interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
  }
  interface ActivityParty_Relationships {
  }
  interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
  }
  interface ActivityParty_FormattedResult {
  }
  interface ActivityParty_Select {
  }
  interface ActivityParty_Expand {
  }
  interface ActivityParty_Filter {
  }
  interface ActivityParty_Create extends ActivityParty {
  }
  interface ActivityParty_Update extends ActivityParty {
  }
  interface Connection_Base extends WebEntity {
  }
  interface Connection_Fixed extends WebEntity_Fixed {
    connectionid: string;
  }
  interface Connection extends Connection_Base, Connection_Relationships {
  }
  interface Connection_Relationships {
  }
  interface Connection_Result extends Connection_Base, Connection_Relationships {
  }
  interface Connection_FormattedResult {
  }
  interface Connection_Select {
  }
  interface Connection_Expand {
  }
  interface Connection_Filter {
  }
  interface Connection_Create extends Connection {
  }
  interface Connection_Update extends Connection {
  }
  interface msdyn_accountkpiitem_Base extends WebEntity {
  }
  interface msdyn_accountkpiitem_Fixed extends WebEntity_Fixed {
    msdyn_accountkpiitemid: string;
  }
  interface msdyn_accountkpiitem extends msdyn_accountkpiitem_Base, msdyn_accountkpiitem_Relationships {
  }
  interface msdyn_accountkpiitem_Relationships {
  }
  interface msdyn_accountkpiitem_Result extends msdyn_accountkpiitem_Base, msdyn_accountkpiitem_Relationships {
  }
  interface msdyn_accountkpiitem_FormattedResult {
  }
  interface msdyn_accountkpiitem_Select {
  }
  interface msdyn_accountkpiitem_Expand {
  }
  interface msdyn_accountkpiitem_Filter {
  }
  interface msdyn_accountkpiitem_Create extends msdyn_accountkpiitem {
  }
  interface msdyn_accountkpiitem_Update extends msdyn_accountkpiitem {
  }
  interface msdyn_contactkpiitem_Base extends WebEntity {
  }
  interface msdyn_contactkpiitem_Fixed extends WebEntity_Fixed {
    msdyn_contactkpiitemid: string;
  }
  interface msdyn_contactkpiitem extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
  }
  interface msdyn_contactkpiitem_Relationships {
  }
  interface msdyn_contactkpiitem_Result extends msdyn_contactkpiitem_Base, msdyn_contactkpiitem_Relationships {
  }
  interface msdyn_contactkpiitem_FormattedResult {
  }
  interface msdyn_contactkpiitem_Select {
  }
  interface msdyn_contactkpiitem_Expand {
  }
  interface msdyn_contactkpiitem_Filter {
  }
  interface msdyn_contactkpiitem_Create extends msdyn_contactkpiitem {
  }
  interface msdyn_contactkpiitem_Update extends msdyn_contactkpiitem {
  }
  interface SystemUser_Base extends WebEntity {
  }
  interface SystemUser_Fixed extends WebEntity_Fixed {
    systemuserid: string;
  }
  interface SystemUser extends SystemUser_Base, SystemUser_Relationships {
  }
  interface SystemUser_Relationships {
  }
  interface SystemUser_Result extends SystemUser_Base, SystemUser_Relationships {
  }
  interface SystemUser_FormattedResult {
  }
  interface SystemUser_Select {
  }
  interface SystemUser_Expand {
  }
  interface SystemUser_Filter {
  }
  interface SystemUser_Create extends SystemUser {
  }
  interface SystemUser_Update extends SystemUser {
  }
  interface PostFollow_Base extends WebEntity {
  }
  interface PostFollow_Fixed extends WebEntity_Fixed {
    postfollowid: string;
  }
  interface PostFollow extends PostFollow_Base, PostFollow_Relationships {
  }
  interface PostFollow_Relationships {
  }
  interface PostFollow_Result extends PostFollow_Base, PostFollow_Relationships {
  }
  interface PostFollow_FormattedResult {
  }
  interface PostFollow_Select {
  }
  interface PostFollow_Expand {
  }
  interface PostFollow_Filter {
  }
  interface PostFollow_Create extends PostFollow {
  }
  interface PostFollow_Update extends PostFollow {
  }
}
