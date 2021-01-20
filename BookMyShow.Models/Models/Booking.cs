using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BookMyShow.Models.Enums;

namespace BookMyShow.Models
{
    [Table("Bookings")]
    public class Booking
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int MovieId { get; set; }
        public int Quantity { get; set; }
        public BookingStatus Status { get; set; }
    }
}
