/// <reference path="_internal/rest-entities.d.ts" />
declare namespace SDK {
  namespace REST {
    function createRecord(object: RestAPI.Account, type: "Account", successCallback: (result: RestAPI.AccountResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "Account", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "Account", select: string, expand: string, successCallback: (result: RestAPI.AccountResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestAPI.Account, type: "Account", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "Account", options: string, successCallback: (result: RestAPI.AccountResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestAPI.Contact, type: "Contact", successCallback: (result: RestAPI.ContactResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "Contact", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "Contact", select: string, expand: string, successCallback: (result: RestAPI.ContactResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestAPI.Contact, type: "Contact", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "Contact", options: string, successCallback: (result: RestAPI.ContactResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestAPI.dg_account_contact, type: "dg_account_contact", successCallback: (result: RestAPI.dg_account_contactResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "dg_account_contact", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "dg_account_contact", select: string, expand: string, successCallback: (result: RestAPI.dg_account_contactResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestAPI.dg_account_contact, type: "dg_account_contact", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "dg_account_contact", options: string, successCallback: (result: RestAPI.dg_account_contactResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestAPI.Task, type: "Task", successCallback: (result: RestAPI.TaskResult) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: "Task", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: "Task", select: string, expand: string, successCallback: (result: RestAPI.TaskResult) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestAPI.Task, type: "Task", successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: "Task", options: string, successCallback: (result: RestAPI.TaskResult[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function createRecord(object: RestAPI.RestEntity, type: string, successCallback: (result: RestAPI.RestEntity) => any, errorCallback: (err: Error) => any): void;
    function deleteRecord(id: string, type: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveRecord(id: string, type: string, select: string, expand: string, successCallback: (result: RestAPI.RestEntity) => any, errorCallback: (err: Error) => any): void;
    function updateRecord(id: string, object: RestAPI.RestEntity, type: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function retrieveMultipleRecords(type: string, options: string, successCallback: (result: RestAPI.RestEntity[]) => any, errorCallback: (err: Error) => any, onComplete: any): void;
    function associateRecords(parentId: string, parentType: string, relationshipName: string, childId: string, childType: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
    function disassociateRecords(parentId: string, parentType: string, relationshipName: string, childId: string, childType: string, successCallBack: () => any, errorCallback: (err: Error) => any): void;
  }
}
