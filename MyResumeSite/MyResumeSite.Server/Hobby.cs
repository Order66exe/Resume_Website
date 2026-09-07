using System.ComponentModel.DataAnnotations;

namespace MyResumeSite.Server
{
    public class Hobby
    {
        [StringLength(255)]
        public string Name { get; set; }

        public int Enjoyment { get; set; }

        public bool AmIGood { get; set; }
    }
}
