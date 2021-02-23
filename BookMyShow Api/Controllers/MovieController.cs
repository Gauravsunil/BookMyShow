using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookMyShow.Models;
using BookMyShow.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookMyShow.Controllers
{
    [Route("api/[controller]/movies")]
    [ApiController]
    public class MovieController : Controller
    {
        private readonly IMovieService Service;
        public MovieController(IMovieService service)
        {
            this.Service = service;
        } 

        [Route("all")]
        public IActionResult GetMovies()
        {
            return Ok(this.Service.GetMovies());
        }
        
        [Route("{movieId}")]
        public IActionResult GetMovie(int movieId)
        {
            return Ok(this.Service.GetMovie(movieId));
        }

      
        
        public IActionResult PostBooking(Booking booking)
        {
            
            return Ok(this.Service.PostBooking(booking));
        }

        
        [Route("mybookings/{userId}")]
        
        public IActionResult GetMyBookings(string userId)
        {
            return Ok(this.Service.GetMyBookings(userId));
        }

        
        [Route("deletebooking/{bookingId}")]

        public IActionResult GetDeleteBooking(int bookingId)
        {
            this.Service.DeleteBooking(bookingId);
            return Ok();
        }

        
        [Route("confirmbooking/{userId}")]

        public IActionResult GetConfirmBooking(string userId)
        {
            this.Service.ConfirmBooking(userId);
            return Ok();
        }
        
        [Route("history/{userId}")]
        public IActionResult GetHistory(string userId)
        {

            return Ok(this.Service.GetHistory(userId));
        }
        
        [Route("addmovie")]
        public IActionResult PostMovie(Movie movie)
        {
            return Ok(this.Service.PostMovie(movie));
        }

        [Route("addtimeslot")]

        public IActionResult PostTimeSlot(TimeSlot timeSlot)
        {
            return Ok(this.Service.PostTimeSlot(timeSlot));
        }

        [Route("gettimeslots")]
        public IActionResult GetTimeSlots()
        {
            return Ok(this.Service.GetTimeSlots());
        }

        [Route("gettimeslot/{movieId}")]

        public IActionResult GetTimeSlot(int movieId)
        {
            return Ok(this.Service.GetTimeSlot(movieId));
        }

        [Route("searchmovie/{movieName}")]
        public IActionResult GetSearchMovie(string movieName)
        {
            return Ok(this.Service.GetSearchMovies(movieName));
        }
    }
}
