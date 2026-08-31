using Microsoft.AspNetCore.Mvc;

namespace MyResumeSite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HobbiesController : ControllerBase
    {
        private string[] HobbyNames = new string[] {
            "Cooking",
            "Drone Photography",
            "Gaming",
            "Surfing",
            "Sketching"
        };
        [HttpGet(Name = "GetHobbies")]
        public Hobby[] Get()
        {
            Hobby[] hobbies = new Hobby[5];
            for (int i = 0; i < hobbies.Length; i++)
            {
                hobbies[i] = new Hobby { Name = HobbyNames[i], Enjoyment = 5, AmIGood = true };
            }
            return hobbies;
        }
    }
}
