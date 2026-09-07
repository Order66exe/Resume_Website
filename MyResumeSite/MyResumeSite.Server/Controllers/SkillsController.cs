using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;
using System.Data.SqlClient;


//using System.Data.Entity;
using System.Net.WebSockets;

namespace MyResumeSite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsController : ControllerBase
    {
        private string[] SkillNames = new string[] {
            "C Sharp",
            "JavaScript",
            "Angular",
            "CSS",
            "HTML"
        };
        [HttpGet(Name = "GetSkills")]
        public async Task<Skill[]> Get()
        {

            //var dbContext = new ResumeSiteDBContext();
            //try
            //{
            //    dbContext.Database.OpenConnection();
            //    dbContext.Database.CloseConnection();
            //}
            //catch (SqlException)
            //{
            //    Console.WriteLine("uh oh");
            //}
            //Skill[] skills = new Skill[5];
            //using (var context = new ResumeSiteDBContext())
            //{
            //    var thing = context.Skills.AsQueryable();
            //    string tester = thing.ToString();
            //    var thingy = thing.ElementAt(0);
            //    skills = thing.ToArray();
            //}
            //return skills;
            Skill[] skills = new Skill[5];
            for (int i = 0; i < skills.Length; i++)
            {
                skills[i] = new Skill { Name = SkillNames[i], My_Proficiency = "Beginner", Years_Of_Experience = 1 };
            }
            return skills;
        }
    }
}
