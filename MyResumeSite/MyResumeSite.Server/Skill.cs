using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyResumeSite.Server
{
    [Table("Skills")]
    public class Skill
    {
        [Key]
        [StringLength(255)]
        public string Name { get; set; }
        [StringLength(255)]
        [Column("my_proficiency")]
        public string My_Proficiency { get; set; }
        [Column("years_of_experience")]
        public int Years_Of_Experience { get; set; }
    }
}
