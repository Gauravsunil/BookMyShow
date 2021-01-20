using AutoMapper;
using BookMyShow.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper.Contrib.Extensions;
using Dapper;
using static BookMyShow.Models.Enums;
using System.Data.SqlClient;
using BookMyShow.Data;
using Newtonsoft.Json;
using System;

namespace BookMyShow.Services
{
    public class MovieService:IMovieService
    {
        private readonly IDbConnection Db;

        private readonly IDatabaseInstance DatabaseInstance;
        public MovieService(IConfiguration configuration,IDatabaseInstance databaseInstance)
        {
            this.Db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
            this.DatabaseInstance = databaseInstance;
        }

       
        public List<Movie> GetMovies()
        {
            return this.DatabaseInstance.ReadAll<BookMyShow.Models.DataModels.Movie>(true).Select(s=>s.MapTo<BookMyShow.Models.DataModels.Movie,Movie>()).ToList();
        } 
        
        public Movie GetMovie(int movieId)
        {
            return this.DatabaseInstance.Read<BookMyShow.Models.DataModels.Movie>(true, movieId).MapTo<BookMyShow.Models.DataModels.Movie,Movie>();
        }


        public int PostMovie(Movie movie)
        {
            return this.DatabaseInstance
                 .Create<BookMyShow.Models.DataModels.Movie>(false, movie.MapTo<Movie,BookMyShow.Models.DataModels.Movie>());
        }

        public List<object> GetMyBookings(string userId)
        {
            var sql = $"SELECT * FROM BookingView WHERE UserId='{userId}' and Status={(int)BookingStatus.Pending}";
            return this.DatabaseInstance.ReadAll<object>(false, sql).ToList();
        }
        
        public void DeleteBooking(int bookingId)
        {
            var booking = this.DatabaseInstance.Read<BookMyShow.Models.DataModels.Booking>(true,bookingId);
            this.DatabaseInstance.Delete<BookMyShow.Models.DataModels.Booking>(true,booking);
        }

        
        public void ConfirmBooking(string userId)
        {
            var sql = $"UPDATE Bookings SET Status={(int)BookingStatus.Confirm} where userId='{userId}' and Status={(int)BookingStatus.Pending}";
            this.DatabaseInstance.Update<BookMyShow.Models.DataModels.Booking>(true,sql);
        }
        
        public List<object> GetHistory(string userId)
        {
            var sql = $"SELECT * FROM BookingView WHERE UserId='{userId}' and Status={(int)BookingStatus.Confirm}";
            return this.DatabaseInstance.ReadAll<object>(false,sql).ToList();
        }
        public int PostBooking(Booking booking)
        {
            var mappedBooking = booking.MapTo<Booking,BookMyShow.Models.DataModels.Booking>();
            mappedBooking.Status = BookingStatus.Pending;
            return this.DatabaseInstance.Create<BookMyShow.Models.DataModels.Booking>(true, mappedBooking);
        }
        

        public int PostTimeSlot(TimeSlot timeSlot)
        {
            return this.DatabaseInstance
                .Create<BookMyShow.Models.DataModels.TimeSlot>(true,timeSlot.MapTo<TimeSlot,BookMyShow.Models.DataModels.TimeSlot>());
        }

        public List<TimeSlot> GetTimeSlots()
        {
            return this.DatabaseInstance.ReadAll<BookMyShow.Models.DataModels.TimeSlot>(true).Select(s => s.MapTo<BookMyShow.Models.DataModels.TimeSlot,TimeSlot>()).ToList();
        }

        public TimeSlot GetTimeSlot(int movieId)
        {
            return this.DatabaseInstance.Read<BookMyShow.Models.DataModels.TimeSlot>(true,movieId).MapTo<BookMyShow.Models.DataModels.TimeSlot,TimeSlot>();
        }


        public List<Movie> GetSearchMovies(string movieName)
        {
            var sql = $"SELECT * FROM Movies WHERE Name LIKE '{movieName}%'";
            return this.DatabaseInstance.ReadAll<BookMyShow.Models.DataModels.Movie>(false, sql).Select(s=>s.MapTo<BookMyShow.Models.DataModels.Movie,Movie>()).ToList();
        }
        
    }

    public static class MappingExtension
    {
        public static D MapTo<S, D>(this S data)
        {
            
            return Mapper.Map<D>(data);
        }

        
    }    
}
