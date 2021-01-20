using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShow.Models.DataModels
{
    [Table("MovieTimeSlots")]
    [PetaPoco.TableName("MovieTimeSlots")]
    [PetaPoco.PrimaryKey("Id")]
    public class TimeSlot
    {
        public int Id { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
    }
}
