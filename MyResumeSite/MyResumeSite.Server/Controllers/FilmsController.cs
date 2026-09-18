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
    public class FilmsController : ControllerBase
    {
        [HttpGet("GetMovies")]
        public async Task<Film[]> Get()
        {
            Film[] films = Array.Empty<Film>();
            using (var context = new ResumeSiteDBContext())
            {
                var dbSetFilms = context.Films.AsQueryable();
                films = dbSetFilms.ToArray();
            }
            return films;
        }
    }
}
