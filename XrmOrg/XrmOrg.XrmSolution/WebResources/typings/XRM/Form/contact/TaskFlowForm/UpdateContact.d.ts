/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/contact.d.ts" />
declare namespace Form.contact.TaskFlowForm {
  namespace UpdateContact {
    namespace Tabs {
      interface step_2 extends Xrm.SectionCollectionBase {
        get(name: "step_2_section1"): Xrm.PageSection;
        get(name: "step_2_section2"): Xrm.PageSection;
        get(name: "step_2_section2"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface step_25 extends Xrm.SectionCollectionBase {
        get(name: "step_25_section1"): Xrm.PageSection;
        get(name: "step_25_section1"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "c610debb-05fc-462e-9ec5-8ed646b3e585_next"): Xrm.Attribute<any>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "043dc848-5c9b-b5c1-9417-c4c55740395d_back"): Xrm.Attribute<any>;
      get(name: "043dc848-5c9b-b5c1-9417-c4c55740395d_next"): Xrm.Attribute<any>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "parentaccountid"): Xrm.LookupAttribute;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "c610debb-05fc-462e-9ec5-8ed646b3e585_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "middlename"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "043dc848-5c9b-b5c1-9417-c4c55740395d_back"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "043dc848-5c9b-b5c1-9417-c4c55740395d_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "contact_customer_accounts:name"): Xrm.StringControl;
      get(name: "contact_customer_accounts:parentaccountid"): Xrm.LookupControl;
      get(name: "contact_customer_accounts:industrycode"): Xrm.OptionSetControl<number>;
      get(name: "contact_customer_accounts:telephone1"): Xrm.StringControl;
      get(name: "contact_customer_accounts:websiteurl"): Xrm.StringControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "step_2"): Xrm.PageTab<Tabs.step_2>;
      get(name: "step_25"): Xrm.PageTab<Tabs.step_25>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface UpdateContact extends Xrm.PageBase<UpdateContact.Attributes,UpdateContact.Tabs,UpdateContact.Controls> {
    getAttribute(attributeName: "c610debb-05fc-462e-9ec5-8ed646b3e585_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "043dc848-5c9b-b5c1-9417-c4c55740395d_back"): Xrm.Attribute<any>;
    getAttribute(attributeName: "043dc848-5c9b-b5c1-9417-c4c55740395d_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "c610debb-05fc-462e-9ec5-8ed646b3e585_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "middlename"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "043dc848-5c9b-b5c1-9417-c4c55740395d_back"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "043dc848-5c9b-b5c1-9417-c4c55740395d_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "contact_customer_accounts:name"): Xrm.StringControl;
    getControl(controlName: "contact_customer_accounts:parentaccountid"): Xrm.LookupControl;
    getControl(controlName: "contact_customer_accounts:industrycode"): Xrm.OptionSetControl<number>;
    getControl(controlName: "contact_customer_accounts:telephone1"): Xrm.StringControl;
    getControl(controlName: "contact_customer_accounts:websiteurl"): Xrm.StringControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
