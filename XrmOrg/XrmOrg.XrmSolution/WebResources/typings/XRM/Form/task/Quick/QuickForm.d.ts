/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/task.d.ts" />
declare namespace Form.task.Quick {
  namespace QuickForm {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "information"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "subject"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
      get(name: "ownerid"): Xrm.LookupControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickForm extends Xrm.PageBase<QuickForm.Attributes,QuickForm.Tabs,QuickForm.Controls> {
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
