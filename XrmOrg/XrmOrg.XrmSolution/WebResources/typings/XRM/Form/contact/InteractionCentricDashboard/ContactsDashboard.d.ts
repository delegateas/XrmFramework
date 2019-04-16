/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/contact.d.ts" />
declare namespace Form.contact.InteractionCentricDashboard {
  namespace ContactsDashboard {
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
      get(name: "Component5cdf2fb"): Xrm.SubGridControl;
      get(name: "Componentd265f20"): Xrm.SubGridControl;
      get(name: "Component7d7ff61"): Xrm.SubGridControl;
      get(name: "Component{c1b0b0ed-3490-671d-aa95-a3cb5e8505d6}"): Xrm.BaseControl;
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
  interface ContactsDashboard extends Xrm.PageBase<ContactsDashboard.Attributes,ContactsDashboard.Tabs,ContactsDashboard.Controls> {
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "Component5cdf2fb"): Xrm.SubGridControl;
    getControl(controlName: "Componentd265f20"): Xrm.SubGridControl;
    getControl(controlName: "Component7d7ff61"): Xrm.SubGridControl;
    getControl(controlName: "Component{c1b0b0ed-3490-671d-aa95-a3cb5e8505d6}"): Xrm.BaseControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
