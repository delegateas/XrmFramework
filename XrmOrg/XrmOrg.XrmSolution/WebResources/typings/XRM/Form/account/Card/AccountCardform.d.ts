/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/account.d.ts" />
declare namespace Form.account.Card {
  namespace AccountCardform {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "primarycontactid"): Xrm.LookupAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "primarycontactid"): Xrm.LookupControl;
      get(name: "ownerid"): Xrm.LookupControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
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
  interface AccountCardform extends Xrm.PageBase<AccountCardform.Attributes,AccountCardform.Tabs,AccountCardform.Controls> {
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
