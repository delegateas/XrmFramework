
namespace DG.Account {
    const Page = <Form.account.Main.Account>Xrm.Page;

    export function onLoad() {
        // Attach onSave
        Page.data.entity.addOnSave(onSave);

        // Attach onChange
        Page.getAttribute("accountnumber").addOnChange(fooChange);
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
    function bigQueryExample() {
        XrmQuery.retrieveMultiple(x => x.accounts)
            .select(x => [x.name, x.emailaddress1])
            .expand(x => x.account_master_account, x => [x.name])
            .filter(x =>
                Filter.and(
                    Filter.equals(x.address1_shippingmethodcode, account_address1_shippingmethodcode.Airborne),
                    Filter.greaterThan(x.creditlimit, 1000))
            )
            .orderDesc(x => x.creditlimit)
            .top(5)
            .execute(accounts => {
                // Do something here with the retrieved accounts
            },
            error => { 
                // Note: The error and onComplete callbacks are optional arguments to the .execute function
                Page.ui.setFormNotification(error.message, "ERROR", "someUniqueId");
            });
    }
}