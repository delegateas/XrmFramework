using System;
using System.Linq;
using DG.XrmFramework.BusinessDomain.ServiceContext;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DG.XrmFramework.Tests
{
    [TestClass]
    public class TestExample : TestBase
    {
        [TestMethod]
        public void TestPrimaryContactIsCreated()
        {
            using (var context = new Xrm(orgAdminUIService))
            {
                var acc = new Account();
                acc.Id = orgAdminUIService.Create(acc);

                var retrieved = context.AccountSet.Where(x => x.AccountId == acc.Id).FirstOrDefault();
                Assert.IsNotNull(retrieved.PrimaryContactId);
                var primaryContact = context.ContactSet.Where(x => x.ContactId == retrieved.PrimaryContactId.Id).FirstOrDefault();
                Assert.IsNotNull(primaryContact);
            }
        }
    }
}
