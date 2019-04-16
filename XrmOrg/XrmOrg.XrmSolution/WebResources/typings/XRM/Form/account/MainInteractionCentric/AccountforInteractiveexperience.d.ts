/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/account.d.ts" />
declare namespace Form.account.MainInteractionCentric {
  namespace AccountforInteractiveexperience {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "ACCOUNT_INFORMATION"): Xrm.PageSection;
        get(name: "Timeline"): Xrm.PageSection;
        get(name: "ref_pan_SUMMARY_TAB_section_6"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "COMPANY_PROFILE"): Xrm.PageSection;
        get(name: "DETAILS_TAB_section_6"): Xrm.PageSection;
        get(name: "MARKETING"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "BILLING"): Xrm.PageSection;
        get(name: "SHIPPING"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "primarycontactid"): Xrm.Attribute<any>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: "parentaccountid"): Xrm.LookupAttribute;
      get(name: "address1_composite"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "originatingleadid"): Xrm.LookupAttribute;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "name"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: "primarycontactid"): Xrm.LookupControl;
      get(name: "parentaccountid"): Xrm.LookupControl;
      get(name: "address1_composite"): Xrm.StringControl;
      get(name: "interactionwallcontrol"): Xrm.BaseControl;
      get(name: "Contacts"): Xrm.BaseControl;
      get(name: "accountopportunitiesgrid"): Xrm.BaseControl;
      get(name: "accountcasessgrid"): Xrm.BaseControl;
      get(name: "subgrid_Entitlement"): Xrm.BaseControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "sic"): Xrm.StringControl;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "description"): Xrm.StringControl;
      get(name: "originatingleadid"): Xrm.LookupControl;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "transactioncurrencyid"): Xrm.LookupControl;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountforInteractiveexperience extends Xrm.PageBase<AccountforInteractiveexperience.Attributes,AccountforInteractiveexperience.Tabs,AccountforInteractiveexperience.Controls> {
    getAttribute(attributeName: "primarycontactid"): Xrm.Attribute<any>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl;
    getControl(controlName: "address1_composite"): Xrm.StringControl;
    getControl(controlName: "interactionwallcontrol"): Xrm.BaseControl;
    getControl(controlName: "Contacts"): Xrm.BaseControl;
    getControl(controlName: "accountopportunitiesgrid"): Xrm.BaseControl;
    getControl(controlName: "accountcasessgrid"): Xrm.BaseControl;
    getControl(controlName: "subgrid_Entitlement"): Xrm.BaseControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
