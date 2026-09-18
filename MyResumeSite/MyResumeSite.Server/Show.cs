using Microsoft.AspNetCore.Routing.Constraints;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyResumeSite.Server
{
    public class Show
    {
        public int Id { get; set; }
        public int Seasons { get; set; }
        public int Total_Episodes { get; set; }
    }
}
