/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/task.d.ts" />
declare namespace Form.task.Main {
  namespace Information {
    namespace Tabs {
      interface task extends Xrm.SectionCollectionBase {
        get(name: "task description"): Xrm.PageSection;
        get(name: "task details"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
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
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "actualdurationminutes"): Xrm.NumberAttribute;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "category"): Xrm.Attribute<string>;
      get(name: "subcategory"): Xrm.Attribute<string>;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "subject"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "regardingobjectid"): Xrm.LookupControl;
      get(name: "ownerid"): Xrm.LookupControl;
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "category"): Xrm.StringControl;
      get(name: "subcategory"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "task"): Xrm.PageTab<Tabs.task>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<task_prioritycode>;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "category"): Xrm.Attribute<string>;
    getAttribute(attributeName: "subcategory"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<task_prioritycode>;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "category"): Xrm.StringControl;
    getControl(controlName: "subcategory"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
