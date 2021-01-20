using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShow.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Director { get; set; }
        public string Producer { get; set; }
        public int Rating { get; set; }
        public List<Cast> Casts { get; set; }
        public string Genre { get; set; }
        public int Price { get; set; }
        public string TimeSlotId { get; set; }
        public string Image { get; set;    }
        public string ImageSource { get; set; }
    }

    public class Cast
    {
        public string CastName { get; set; }
    }
}
