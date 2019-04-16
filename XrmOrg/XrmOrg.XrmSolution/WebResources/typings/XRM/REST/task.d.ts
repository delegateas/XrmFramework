/// <reference path="../_internal/sdk.d.ts" />
/// <reference path="../dg.xrmquery.rest.d.ts" />
/// <reference path="../_internal/rest-entities.d.ts" />
/// <reference path="../_internal/EntityEnum/task.d.ts" />
declare namespace RestAPI {
  interface TaskBase extends RestEntity {
    IsBilled?: boolean | null;
    VersionNumber?: number | null;
    CreatedOn?: Date | null;
    TraversedPath?: string | null;
    IsWorkflowCreated?: boolean | null;
    CrmTaskAssignedUniqueId?: string | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    OnHoldTime?: number | null;
    PriorityCode?: SDK.OptionSet<task_prioritycode> | null;
    OverriddenCreatedOn?: Date | null;
    ScheduledStart?: Date | null;
    ActualStart?: Date | null;
    SubscriptionId?: string | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    ExchangeRate?: string | null;
    Subcategory?: string | null;
    RegardingObjectId?: SDK.EntityReference | null;
    StateCode?: SDK.OptionSet<task_statecode> | null;
    TimeZoneRuleVersionNumber?: number | null;
    ActivityAdditionalParams?: string | null;
    ActivityTypeCode?: string | null;
    UTCConversionTimeZoneCode?: number | null;
    SLAId?: SDK.EntityReference | null;
    OwnerId?: SDK.EntityReference | null;
    ImportSequenceNumber?: number | null;
    ScheduledDurationMinutes?: number | null;
    Category?: string | null;
    ProcessId?: string | null;
    Description?: string | null;
    OwningTeam?: SDK.EntityReference | null;
    LastOnHoldTime?: Date | null;
    StageId?: string | null;
    ModifiedOn?: Date | null;
    TransactionCurrencyId?: SDK.EntityReference | null;
    SLAInvokedId?: SDK.EntityReference | null;
    CreatedBy?: SDK.EntityReference | null;
    ModifiedBy?: SDK.EntityReference | null;
    ServiceId?: SDK.EntityReference | null;
    PercentComplete?: number | null;
    OwningUser?: SDK.EntityReference | null;
    ActualEnd?: Date | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    ActivityId?: string | null;
    IsRegularActivity?: boolean | null;
    ScheduledEnd?: Date | null;
    StatusCode?: SDK.OptionSet<task_statuscode> | null;
    ActualDurationMinutes?: number | null;
    Subject?: string | null;
  }
  interface Task extends TaskBase {
    Account_Tasks?: Account | null;
    Contact_Tasks?: Contact | null;
  }
  interface TaskResult extends TaskBase {
    Account_Tasks?: Account | null;
    Contact_Tasks?: Contact | null;
  }
  interface Task_Select extends Task_Expand {
    IsBilled: RestAttribute<Task_Select>;
    VersionNumber: RestAttribute<Task_Select>;
    CreatedOn: RestAttribute<Task_Select>;
    TraversedPath: RestAttribute<Task_Select>;
    IsWorkflowCreated: RestAttribute<Task_Select>;
    CrmTaskAssignedUniqueId: RestAttribute<Task_Select>;
    CreatedOnBehalfBy: RestAttribute<Task_Select>;
    OnHoldTime: RestAttribute<Task_Select>;
    PriorityCode: RestAttribute<Task_Select>;
    OverriddenCreatedOn: RestAttribute<Task_Select>;
    ScheduledStart: RestAttribute<Task_Select>;
    ActualStart: RestAttribute<Task_Select>;
    SubscriptionId: RestAttribute<Task_Select>;
    ModifiedOnBehalfBy: RestAttribute<Task_Select>;
    ExchangeRate: RestAttribute<Task_Select>;
    Subcategory: RestAttribute<Task_Select>;
    RegardingObjectId: RestAttribute<Task_Select>;
    StateCode: RestAttribute<Task_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<Task_Select>;
    ActivityAdditionalParams: RestAttribute<Task_Select>;
    ActivityTypeCode: RestAttribute<Task_Select>;
    UTCConversionTimeZoneCode: RestAttribute<Task_Select>;
    SLAId: RestAttribute<Task_Select>;
    OwnerId: RestAttribute<Task_Select>;
    ImportSequenceNumber: RestAttribute<Task_Select>;
    ScheduledDurationMinutes: RestAttribute<Task_Select>;
    Category: RestAttribute<Task_Select>;
    ProcessId: RestAttribute<Task_Select>;
    Description: RestAttribute<Task_Select>;
    OwningTeam: RestAttribute<Task_Select>;
    LastOnHoldTime: RestAttribute<Task_Select>;
    StageId: RestAttribute<Task_Select>;
    ModifiedOn: RestAttribute<Task_Select>;
    TransactionCurrencyId: RestAttribute<Task_Select>;
    SLAInvokedId: RestAttribute<Task_Select>;
    CreatedBy: RestAttribute<Task_Select>;
    ModifiedBy: RestAttribute<Task_Select>;
    ServiceId: RestAttribute<Task_Select>;
    PercentComplete: RestAttribute<Task_Select>;
    OwningUser: RestAttribute<Task_Select>;
    ActualEnd: RestAttribute<Task_Select>;
    OwningBusinessUnit: RestAttribute<Task_Select>;
    ActivityId: RestAttribute<Task_Select>;
    IsRegularActivity: RestAttribute<Task_Select>;
    ScheduledEnd: RestAttribute<Task_Select>;
    StatusCode: RestAttribute<Task_Select>;
    ActualDurationMinutes: RestAttribute<Task_Select>;
    Subject: RestAttribute<Task_Select>;
  }
  interface Task_Filter {
    IsBilled: boolean;
    VersionNumber: number;
    CreatedOn: Date;
    TraversedPath: string;
    IsWorkflowCreated: boolean;
    CrmTaskAssignedUniqueId: XQR.Guid;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    OnHoldTime: number;
    PriorityCode: XQR.ValueContainerFilter<task_prioritycode>;
    OverriddenCreatedOn: Date;
    ScheduledStart: Date;
    ActualStart: Date;
    SubscriptionId: XQR.Guid;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    ExchangeRate: string;
    Subcategory: string;
    RegardingObjectId: XQR.EntityReferenceFilter;
    StateCode: XQR.ValueContainerFilter<task_statecode>;
    TimeZoneRuleVersionNumber: number;
    ActivityAdditionalParams: string;
    ActivityTypeCode: string;
    UTCConversionTimeZoneCode: number;
    SLAId: XQR.EntityReferenceFilter;
    OwnerId: XQR.EntityReferenceFilter;
    ImportSequenceNumber: number;
    ScheduledDurationMinutes: number;
    Category: string;
    ProcessId: XQR.Guid;
    Description: string;
    OwningTeam: XQR.EntityReferenceFilter;
    LastOnHoldTime: Date;
    StageId: XQR.Guid;
    ModifiedOn: Date;
    TransactionCurrencyId: XQR.EntityReferenceFilter;
    SLAInvokedId: XQR.EntityReferenceFilter;
    CreatedBy: XQR.EntityReferenceFilter;
    ModifiedBy: XQR.EntityReferenceFilter;
    ServiceId: XQR.EntityReferenceFilter;
    PercentComplete: number;
    OwningUser: XQR.EntityReferenceFilter;
    ActualEnd: Date;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    ActivityId: XQR.Guid;
    IsRegularActivity: boolean;
    ScheduledEnd: Date;
    StatusCode: XQR.ValueContainerFilter<task_statuscode>;
    ActualDurationMinutes: number;
    Subject: string;
  }
  interface Task_Expand {
    Account_Tasks: RestExpand<Task_Select,Account_Select>;
    Contact_Tasks: RestExpand<Task_Select,Contact_Select>;
  }
}
interface RestEntities {
  Task: RestMapping<RestAPI.Task,RestAPI.Task_Select,RestAPI.Task_Expand,RestAPI.Task_Filter,RestAPI.TaskResult>;
}
