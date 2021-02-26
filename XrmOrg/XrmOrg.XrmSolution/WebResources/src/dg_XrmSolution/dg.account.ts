namespace DG.Account {
  let formContext: Form.account.Main.Information;

  export function onLoad(context: Xrm.ExecutionContext<any, any>) {
    formContext = <Form.account.Main.Information>context.getFormContext()
    // Attach onSave
    formContext.data.entity.addOnSave(onSave);

    // Attach onChange
    formContext.getAttribute("accountnumber").addOnChange(fooChange);
  }

  export function onSave() {
    // Do something ..
  }

  export function fooChange() {
    // Do something ..
  }



  /**
   * Big showcase of what XrmQuery is capable of
   */
  async function bigQueryExample() {
    let accounts =
      await XrmQuery.retrieveMultiple(x => x.accounts)
        .select(x => [x.name, x.emailaddress1])
        .expand(x => x.account_master_account, x => [x.name])
        .filter(x =>
          Filter.and(
            Filter.equals(x.address1_shippingmethodcode, account_address1_shippingmethodcode.Airborne),
            Filter.greaterThan(x.creditlimit, 1000))
        )
        .orderDesc(x => x.creditlimit)
        .top(5)
        .promise()
  }
}