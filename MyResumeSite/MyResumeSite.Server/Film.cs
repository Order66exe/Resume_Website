using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyResumeSite.Server
{
    public class Film
    {
        [Key]
        [StringLength(255)]
        public int Id { get; set;  }
        public string Title { get; set; }
        public char Rating { get; set; }
        public string Genre { get; set; }
        public string Tags { get; set; }
        public string Starring { get; set; }
        public DateTime Release_Date { get; set; }
        //[ForeignKey("id")]
        //public int Movie_Id { get; set; }
        //[ForeignKey("id")]
        //public int Show_Id { get; set; }
    }
}
