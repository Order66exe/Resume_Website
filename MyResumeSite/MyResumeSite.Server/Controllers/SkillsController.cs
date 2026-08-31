using Microsoft.AspNetCore.Mvc;

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
        public Skill[] Get()
        {
            //return "{\"name\": \"hello\",  \"myProficiency\": \"adawdawd\", \"yearsOfExperience\": 1}";
            Skill[] skills = new Skill[5];
            for (int i = 0; i < skills.Length; i++)
            {
                skills[i] = new Skill { Name = SkillNames[i], MyProficiency = "Beginner", YearsOfExperience = 1 };
            }
            return skills;
        }
    }
}
