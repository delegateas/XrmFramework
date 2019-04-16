/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/task.d.ts" />
declare namespace Form.task.Card {
  namespace TaskCardform {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "statuscode"): Xrm.OptionSetAttribute<task_statuscode>;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
      get(name: "scheduledstart"): Xrm.DateAttribute;
      get(name: "actualdurationminutes"): Xrm.NumberAttribute;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "createdon"): Xrm.LookupAttribute;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "statuscode"): Xrm.OptionSetControl<task_statuscode>;
      get(name: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
      get(name: "scheduledstart"): Xrm.DateControl;
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "regardingobjectid"): Xrm.LookupControl;
      get(name: "ownerid"): Xrm.LookupControl;
      get(name: "createdon"): Xrm.LookupControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface TaskCardform extends Xrm.PageBase<TaskCardform.Attributes,TaskCardform.Tabs,TaskCardform.Controls> {
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<task_statuscode>;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
    getAttribute(attributeName: "scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "createdon"): Xrm.LookupAttribute;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<task_statuscode>;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
    getControl(controlName: "scheduledstart"): Xrm.DateControl;
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: "createdon"): Xrm.LookupControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
