using AutoMapper;
using BookMyShow.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShow
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {

            CreateMap<BookMyShow.Models.DataModels.Movie, Movie>()
                .ForMember(d=>d.Casts,options=>options.MapFrom(s=>JsonConvert.DeserializeObject<List<Cast>>(s.Casts)))
                .ForMember(d=>d.TimeSlotId,options=>options.MapFrom(s=>s.TimeSlotId.ToString()));

            CreateMap<Movie,BookMyShow.Models.DataModels.Movie>()
                .ForMember(d=>d.Casts,options=>options.MapFrom(s=>JsonConvert.SerializeObject(s.Casts)))
                .ForMember(d => d.TimeSlotId, options => options.MapFrom(s => Convert.ToInt32(s.TimeSlotId))); ;
            
            CreateMap<BookMyShow.Models.DataModels.Booking, Booking>();

            CreateMap<Booking, BookMyShow.Models.DataModels.Booking>();

            CreateMap<TimeSlot, BookMyShow.Models.DataModels.TimeSlot>()
                .ForMember(d => d.StartTime, options => options.MapFrom(s => TimeSpan.Parse(s.StartTime)))
                .ForMember(d=>d.EndTime,options=>options.MapFrom(s=>TimeSpan.Parse(s.EndTime)));


            CreateMap<BookMyShow.Models.DataModels.TimeSlot, TimeSlot >()
                .ForMember(d => d.StartTime, options => options.MapFrom(s => s.StartTime.ToString()))
                .ForMember(d => d.EndTime, options => options.MapFrom(s =>s.EndTime.ToString()));



        }
    }
}
