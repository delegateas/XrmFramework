/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/task.d.ts" />
declare namespace Form.task.MainInteractionCentric {
  namespace TaskforInteractiveexperience {
    namespace Tabs {
      interface tab_4 extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_4"): Xrm.PageSection;
        get(name: "tab_4_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "regardingobjectid"): Xrm.LookupAttribute;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "actualdurationminutes"): Xrm.NumberAttribute;
      get(name: "description"): Xrm.Attribute<string>;
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
      get(name: "regardingobjectid"): Xrm.LookupControl;
      get(name: "regardingobjectid1"): Xrm.LookupControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "statecode"): Xrm.OptionSetControl<task_statecode>;
      get(name: "ownerid"): Xrm.LookupControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_4"): Xrm.PageTab<Tabs.tab_4>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface TaskforInteractiveexperience extends Xrm.PageBase<TaskforInteractiveexperience.Attributes,TaskforInteractiveexperience.Tabs,TaskforInteractiveexperience.Controls> {
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<task_statecode>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl;
    getControl(controlName: "regardingobjectid1"): Xrm.LookupControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<task_statecode>;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
