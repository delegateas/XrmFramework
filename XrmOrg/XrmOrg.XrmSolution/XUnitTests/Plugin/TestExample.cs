using System;
using DG.XrmFramework.BusinessDomain.ServiceContext;
using FluentAssertions;
using Xunit;
using Xunit.Abstractions;
using XUnitTests.Base;

namespace XUnitTests.Plugin
{
    public class TestExample : UnitTestBase
    {
        public TestExample(XrmMockupFixture xrmMockupFixture, ITestOutputHelper testOutput) : base(xrmMockupFixture,
            testOutput)
        {
        }

        [Fact]
        public void TestPrimaryContactIsCreated()
        {
            using (var context = new Xrm(orgAdminUIService))
            {
                var acc = new Account();
                acc.Id = orgAdminUIService.Create(acc);

                Action act = () => orgAdminService.Update(new Account(acc.Id));

                act.Should().Throw<NotImplementedException>();
            }
        }
    }
}