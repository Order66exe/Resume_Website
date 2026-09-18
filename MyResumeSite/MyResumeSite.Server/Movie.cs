using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyResumeSite.Server
{
    public class Movie
    {
        public int Id { get; set; }
        public int Runtime { get; set; }
        public string Director { get; set; }
    }
}
