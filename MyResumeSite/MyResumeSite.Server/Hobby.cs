using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyResumeSite.Server
{
    public class Hobby
    {
        [Key]
        [StringLength(255)]
        public string Name { get; set; }
        public int Enjoyment { get; set; }
        [Column("am_i_good")]
        public bool AmIGood { get; set; }
        public string Type { get; set; }
    }
}
