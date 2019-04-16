/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/task.d.ts" />
declare namespace Form.task.Quick {
  namespace TaskReferencePanel {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: "tab_1_section_3"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "regardingobjectid"): Xrm.LookupAttribute;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
      get(name: "statecode"): Xrm.OptionSetAttribute<task_statecode>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "actualdurationminutes"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "subject"): Xrm.StringControl;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "regardingobjectid"): Xrm.LookupControl;
      get(name: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
      get(name: "statecode"): Xrm.OptionSetControl<task_statecode>;
      get(name: "description"): Xrm.StringControl;
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface TaskReferencePanel extends Xrm.PageBase<TaskReferencePanel.Attributes,TaskReferencePanel.Tabs,TaskReferencePanel.Controls> {
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<task_statecode>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<task_statecode>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
