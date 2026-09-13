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
            Skill[] skills = Array.Empty<Skill>();
            using (var context = new ResumeSiteDBContext())
            {
                var dbSetSkills = context.Skills.AsQueryable();
                skills = dbSetSkills.ToArray();
            }
            return skills;
            //Skill[] skills = new Skill[5];
            //for (int i = 0; i < skills.Length; i++)
            //{
            //    skills[i] = new Skill { Name = SkillNames[i], My_Proficiency = "Beginner", Years_Of_Experience = 1 };
            //}
            //return skills;
        }
    }
}
