using Microsoft.EntityFrameworkCore;
using System.Configuration;
using System.Data.SqlClient;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using static System.Net.Mime.MediaTypeNames;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MyResumeSite.Server
{
    public class ResumeSiteDBContext : DbContext
    {
        public ResumeSiteDBContext() { }
        public ResumeSiteDBContext(DbContextOptions<ResumeSiteDBContext> options) : base(options)
        {
        }
        public DbSet<Hobby> Hobbies { get; set; }
        public DbSet<Skill> Skills { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source = (localdb)\\MSSQLLocalDB; " +
                "Persist Security Info = False; " +
                "User ID = test; " +
                "Password = test; " +
                "Pooling = False; " +
                "MultipleActiveResultSets = False; " +
                "Encrypt = True; " +
                "TrustServerCertificate = False; " +
                "Command Timeout = 0");
        }
    }
}
