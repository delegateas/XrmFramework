using System;
using DG.XrmFramework.BusinessDomain.ServiceContext;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DG.XrmFramework.Tests
{
    [TestClass]
    public class CreateXMLTest : TestBase
    {
        [TestMethod]
        public void TestBagOrderCreated()
        {
            using (var context = new Xrm(orgAdminUIService))
            {
                var bagOrderToCreate = new paa_BagOrder()
                {
                    paa_Name = "test"
                };
                bagOrderToCreate.Id = orgAdminService.Create(bagOrderToCreate);

                var part1ToCreate = new paa_BagPart()
                {
                    paa_Name = "testpart1",
                    paa_BagOrder = bagOrderToCreate.ToEntityReference()
                };
                part1ToCreate.Id = orgAdminService.Create(part1ToCreate);
                
                var part2ToCreate = new paa_BagPart()
                {
                    paa_Name = "testpart2",
                    paa_BagOrder = bagOrderToCreate.ToEntityReference()
                };
                part2ToCreate.Id = orgAdminService.Create(part2ToCreate);

                var bagToUpdate = new paa_BagOrder()
                {
                    paa_BagOrderId = bagOrderToCreate.Id,
                    statuscode = paa_BagOrder_statuscode.Active
                };
                orgAdminService.Update(bagToUpdate);
            }
        }
    }
}