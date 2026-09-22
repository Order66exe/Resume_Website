using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using System.Data.Entity;
using System.Data.SqlClient;
//using System.Data.Entity;
using System.Net.WebSockets;
using System.Threading.Tasks.Dataflow;
using static System.Net.WebRequestMethods;

namespace MyResumeSite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilmsController : ControllerBase
    {
        [HttpGet("all")]
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
        [HttpPost("add")]
        public async Task<ActionResult<Film>> AddFilm(Film film)
        {
            using (var context = new ResumeSiteDBContext())
            {
                context.Films.Add(film);
                await context.SaveChangesAsync();
            }
            return Created();
        }
        [HttpPut("update/{id}")]
        public async Task<ActionResult<Film>> UpdateFilm(int id, Film updatedFilm)
        {
            using (var context = new ResumeSiteDBContext())
            {
                var filmEntity = await context.Films.FindAsync(id);
                if(filmEntity == null)
                {
                    return NotFound();
                }
                filmEntity.Title = updatedFilm.Title;
                filmEntity.MPA = updatedFilm.MPA;
                filmEntity.Rating = updatedFilm.Rating;
                filmEntity.Genre = updatedFilm.Genre;
                filmEntity.Tags = updatedFilm.Tags;
                filmEntity.Starring = updatedFilm.Starring;
                filmEntity.Release_Date = updatedFilm.Release_Date;
                await context.SaveChangesAsync();
            }
            return NoContent();
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteFilm(int id)
        {
            using (var context = new ResumeSiteDBContext())
            {
                var film = await context.Films.FindAsync(id);
                if(film == null)
                {
                    return NotFound();
                }
                context.Films.Remove(film);
                await context.SaveChangesAsync();
            }
            return NoContent();
        }
    }
}
