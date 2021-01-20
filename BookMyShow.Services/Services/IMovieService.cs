using BookMyShow.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShow.Services
{
   public interface IMovieService
    {
       
        List<Movie> GetMovies();
        
        Movie GetMovie(int mid);
        
        
        int PostBooking(Booking booking);
        
        List<object> GetMyBookings(string userId);
       
        void DeleteBooking(int bookingId);
       
        void ConfirmBooking(string userId);
        List<object> GetHistory(string userId);
        
        int PostMovie(Movie movie);

        int PostTimeSlot(TimeSlot timeSlot);

        List<TimeSlot> GetTimeSlots();

        TimeSlot GetTimeSlot(int movieId);
        List<Movie> GetSearchMovies(string movieName);

    }
}
