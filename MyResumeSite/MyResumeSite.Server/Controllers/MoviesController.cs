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
    public class MoviesController : ControllerBase
    {
        //[HttpGet(Name = "GetMovies")]
        //public async Task<Movie[]> Get()
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
