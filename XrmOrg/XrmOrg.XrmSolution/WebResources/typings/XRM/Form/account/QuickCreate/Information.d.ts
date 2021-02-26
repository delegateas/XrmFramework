declare namespace Form.account.QuickCreate {
  namespace Information {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_county"): Xrm.Attribute<string>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_county"): Xrm.StringControl;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_county"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_county"): Xrm.StringControl;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: string): undefined;
  }
}
