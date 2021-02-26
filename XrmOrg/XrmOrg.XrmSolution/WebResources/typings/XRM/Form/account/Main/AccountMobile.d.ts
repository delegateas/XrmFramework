declare namespace Form.account.Main {
  namespace AccountMobile {
    namespace Tabs {
      interface fstab_AssetsAndLocationsTab extends Xrm.SectionCollectionBase {
        get(name: "AssetsAndLocationsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_sub_grids extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_summary extends Xrm.SectionCollectionBase {
        get(name: "fstab_address_section_address"): Xrm.PageSection;
        get(name: "fstab_summary_column_2_section_1"): Xrm.PageSection;
        get(name: "fstab_summary_column_3_section_1"): Xrm.PageSection;
        get(name: "fstab_summary_section_account_information"): Xrm.PageSection;
        get(name: "fstab_summary_section_description"): Xrm.PageSection;
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
      get(name: "address1_line1"): Xrm.Attribute<any>;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "defaultpricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "msdyn_billingaccount"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_serviceterritory"): Xrm.LookupAttribute<"territory">;
      get(name: "msdyn_workorderinstructions"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<any>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ChildAccounts"): Xrm.SubGridControl<"account">;
      get(name: "Contacts"): Xrm.SubGridControl<"contact">;
      get(name: "WORKORDERS"): Xrm.SubGridControl<"msdyn_workorder">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_line1"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "customerAssets"): Xrm.SubGridControl<"msdyn_customerasset">;
      get(name: "defaultpricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "msdyn_billingaccount"): Xrm.LookupControl<"account">;
      get(name: "msdyn_serviceterritory"): Xrm.LookupControl<"territory">;
      get(name: "msdyn_workorderinstructions"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "name1"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "fstab_AssetsAndLocationsTab"): Xrm.PageTab<Tabs.fstab_AssetsAndLocationsTab>;
      get(name: "fstab_sub_grids"): Xrm.PageTab<Tabs.fstab_sub_grids>;
      get(name: "fstab_summary"): Xrm.PageTab<Tabs.fstab_summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountMobile extends Xrm.PageBase<AccountMobile.Attributes,AccountMobile.Tabs,AccountMobile.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<any>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "defaultpricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_billingaccount"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_serviceterritory"): Xrm.LookupAttribute<"territory">;
    getAttribute(attributeName: "msdyn_workorderinstructions"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<any>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ChildAccounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "Contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "WORKORDERS"): Xrm.SubGridControl<"msdyn_workorder">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_line1"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "customerAssets"): Xrm.SubGridControl<"msdyn_customerasset">;
    getControl(controlName: "defaultpricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "msdyn_billingaccount"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_serviceterritory"): Xrm.LookupControl<"territory">;
    getControl(controlName: "msdyn_workorderinstructions"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "name1"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: string): undefined;
  }
}
