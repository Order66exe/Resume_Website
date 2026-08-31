using Microsoft.AspNetCore.Mvc;

namespace MyResumeSite.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HobbiesController : ControllerBase
    {
        [HttpGet(Name = "GetHobbies")]
        public IEnumerable<Hobby> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Hobby
            {
               
            })
            .ToArray();
        }
    }
}
