declare namespace Form.contact.Main {
  namespace ContactMobile {
    namespace Tabs {
      interface fstab_address extends Xrm.SectionCollectionBase {
        get(name: "fstab_address_section_address"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: "tab_2_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_other extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_4_section_2"): Xrm.PageSection;
        get(name: "tab_4_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_sub_grids extends Xrm.SectionCollectionBase {
        get(name: "fstab_sub_grids_section"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_summary extends Xrm.SectionCollectionBase {
        get(name: "fstab_summary_section_contact_information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "CONTACTS"): Xrm.SubGridControl<"contact">;
      get(name: "INVOICES"): Xrm.SubGridControl<"invoice">;
      get(name: "ORDERS"): Xrm.SubGridControl<"salesorder">;
      get(name: "QUOTES"): Xrm.SubGridControl<"quote">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "fstab_address"): Xrm.PageTab<Tabs.fstab_address>;
      get(name: "fstab_other"): Xrm.PageTab<Tabs.fstab_other>;
      get(name: "fstab_sub_grids"): Xrm.PageTab<Tabs.fstab_sub_grids>;
      get(name: "fstab_summary"): Xrm.PageTab<Tabs.fstab_summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ContactMobile extends Xrm.PageBase<ContactMobile.Attributes,ContactMobile.Tabs,ContactMobile.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "CONTACTS"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "INVOICES"): Xrm.SubGridControl<"invoice">;
    getControl(controlName: "ORDERS"): Xrm.SubGridControl<"salesorder">;
    getControl(controlName: "QUOTES"): Xrm.SubGridControl<"quote">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
