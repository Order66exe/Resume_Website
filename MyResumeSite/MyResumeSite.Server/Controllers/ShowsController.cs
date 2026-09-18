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
    public class ShowsController : ControllerBase
    {
        //[HttpGet("GetShows")]
        //public async Task<Show[]> Get()
        //{
        //    Show[] shows = Array.Empty<Show>();
        //    using (var context = new ResumeSiteDBContext())
        //    {
        //        var dbSetMovies = context.Films.AsQueryable();
        //        shows = dbSetMovies.ToArray();
        //    }
        //    return shows;
        //}
        //[HttpGet("GetShows")]
        //public async Task<Show[]> Get()
        //{
        //    Movie[] movies = Array.Empty<Movie>();
        //    using (var context = new ResumeSiteDBContext())
        //    {
        //        var dbSetMovies = context.Movies.AsQueryable();
        //        movies = dbSetMovies.ToArray();
        //    }
        //    return movies;
        //}
    }
}
