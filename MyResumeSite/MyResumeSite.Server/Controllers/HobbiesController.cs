using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;

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
        public async  Task<Hobby[]> Get()
        {
            var dbContext = new ResumeSiteDBContext();
            try
            {
                dbContext.Database.OpenConnection();
                dbContext.Database.CloseConnection();
            }
            catch (SqlException)
            {
                Console.WriteLine("uh oh");
            }
            Hobby[] hobbies = new Hobby[5];
            using (var context = new ResumeSiteDBContext())
            {
                var thing = context.Hobbies.AsQueryable();
                string tester = thing.ToString();
                var thingy = thing.ElementAt(0);
                hobbies = thing.ToArray();
            }
            return hobbies;
            //Hobby[] hobbies = new Hobby[5];
            //for (int i = 0; i < hobbies.Length; i++)
            //{
            //    hobbies[i] = new Hobby { Name = HobbyNames[i], Enjoyment = 5, AmIGood = true };
            //}
            //return hobbies;
        }
    }
}
