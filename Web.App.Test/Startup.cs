using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Web.App.Test.Startup))]
namespace Web.App.Test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
