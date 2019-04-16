declare namespace RestAPI {
  interface RestMapping<O, S, E, F, R> {
  }
  interface RestEntity {
  }
  interface AccountBase extends RestEntity {
  }
  interface AccountResult extends AccountBase {
  }
  interface Account_Select {
  }
  interface Account extends AccountBase {
  }
  interface ContactBase extends RestEntity {
  }
  interface ContactResult extends ContactBase {
  }
  interface Contact_Select {
  }
  interface Contact extends ContactBase {
  }
  interface dg_account_contactBase extends RestEntity {
  }
  interface dg_account_contactResult extends dg_account_contactBase {
  }
  interface dg_account_contact_Select {
  }
  interface dg_account_contact extends dg_account_contactBase {
  }
  interface TaskBase extends RestEntity {
  }
  interface TaskResult extends TaskBase {
  }
  interface Task_Select {
  }
  interface Task extends TaskBase {
  }
}
