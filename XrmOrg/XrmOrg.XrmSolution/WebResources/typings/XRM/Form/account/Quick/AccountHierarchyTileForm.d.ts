/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/account.d.ts" />
declare namespace Form.account.Quick {
  namespace AccountHierarchyTileForm {
    namespace Tabs {
      interface hierarchy extends Xrm.SectionCollectionBase {
        get(name: "account tile"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "primarycontactid"): Xrm.LookupAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "openrevenue"): Xrm.NumberAttribute;
      get(name: "opendeals"): Xrm.NumberAttribute;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "primarycontactid"): Xrm.LookupControl;
      get(name: "ownerid"): Xrm.LookupControl;
      get(name: "openrevenue"): Xrm.NumberControl;
      get(name: "opendeals"): Xrm.NumberControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "hierarchy"): Xrm.PageTab<Tabs.hierarchy>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountHierarchyTileForm extends Xrm.PageBase<AccountHierarchyTileForm.Attributes,AccountHierarchyTileForm.Tabs,AccountHierarchyTileForm.Controls> {
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "openrevenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "opendeals"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: "openrevenue"): Xrm.NumberControl;
    getControl(controlName: "opendeals"): Xrm.NumberControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
