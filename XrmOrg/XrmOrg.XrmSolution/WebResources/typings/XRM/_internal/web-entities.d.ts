interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUD<ICreate, IUpdate> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
declare namespace WebAPI {
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
  interface Task_Base extends WebEntity {
  }
  interface Task_Fixed extends WebEntity_Fixed {
    activityid: string;
  }
  interface Task extends Task_Base, Task_Relationships {
  }
  interface Task_Relationships {
  }
  interface Task_Result extends Task_Base, Task_Relationships {
  }
  interface Task_FormattedResult {
  }
  interface Task_Select {
  }
  interface Task_Expand {
  }
  interface Task_Filter {
  }
  interface Task_Create extends Task {
  }
  interface Task_Update extends Task {
  }
}
