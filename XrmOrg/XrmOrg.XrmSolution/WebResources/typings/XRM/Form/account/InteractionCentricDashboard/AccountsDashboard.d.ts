/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/account.d.ts" />
declare namespace Form.account.InteractionCentricDashboard {
  namespace AccountsDashboard {
    namespace Tabs {
      interface StreamsContainer extends Xrm.SectionCollectionBase {
        get(name: "Streams"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Componentc4e86d7"): Xrm.SubGridControl;
      get(name: "Component2316e00"): Xrm.SubGridControl;
      get(name: "Component666c4a4"): Xrm.SubGridControl;
      get(name: "Component{c25c1ba2-33b6-0760-d1cc-7621224bdaa7}"): Xrm.BaseControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StreamsContainer"): Xrm.PageTab<Tabs.StreamsContainer>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountsDashboard extends Xrm.PageBase<AccountsDashboard.Attributes,AccountsDashboard.Tabs,AccountsDashboard.Controls> {
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "Componentc4e86d7"): Xrm.SubGridControl;
    getControl(controlName: "Component2316e00"): Xrm.SubGridControl;
    getControl(controlName: "Component666c4a4"): Xrm.SubGridControl;
    getControl(controlName: "Component{c25c1ba2-33b6-0760-d1cc-7621224bdaa7}"): Xrm.BaseControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
