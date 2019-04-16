/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/task.d.ts" />
declare namespace Form.task.Main {
  namespace Task {
    namespace Tabs {
      interface TASK_TAB extends Xrm.SectionCollectionBase {
        get(name: "TASK"): Xrm.PageSection;
        get(name: "Description"): Xrm.PageSection;
        get(name: "task details"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute;
      get(name: "actualdurationminutes"): Xrm.NumberAttribute;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<task_statecode>;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "subject"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "regardingobjectid"): Xrm.LookupControl;
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "header_priority"): Xrm.OptionSetControl<task_prioritycode>;
      get(name: "header_scheduledend"): Xrm.DateControl;
      get(name: "header_statecode"): Xrm.OptionSetControl<task_statecode>;
      get(name: "header_ownerid"): Xrm.LookupControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "TASK_TAB"): Xrm.PageTab<Tabs.TASK_TAB>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Task extends Xrm.PageBase<Task.Attributes,Task.Tabs,Task.Controls> {
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<task_statecode>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl;
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "header_priority"): Xrm.OptionSetControl<task_prioritycode>;
    getControl(controlName: "header_scheduledend"): Xrm.DateControl;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<task_statecode>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
