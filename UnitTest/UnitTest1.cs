using BookMyShow.Controllers;
using BookMyShow.Services;
using BookMyShow_Api.Controllers;
using FluentAssert.Exceptions;
using Moq;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTest
{
    [TestClass]
    public class UnitTest1
    {
        private Mock<IMovieService> mockMovieService;
        private MovieController MovieController;
        
        [TestInitialize]
        public void Initializer()
        {
            mockMovieService = new Mock<IMovieService>();
            MovieController = new MovieController(mockMovieService.Object);
        }
        
        [TestMethod]
        public void TestGetMovies()
        {
            var movies = this.MovieController.GetMovies();
            var actualResult = movies as OkObjectResult;
            Assert.AreEqual(HttpStatusCode.OK, (HttpStatusCode)actualResult.StatusCode);

        }

        [DataTestMethod]
        [DataRow(12)]
        public void TestGetMovie(int movieId)
        {
            var movie = this.MovieController.GetMovie(movieId);
            var actualResult = movie as OkObjectResult;
            Assert.AreEqual(HttpStatusCode.OK, (HttpStatusCode)actualResult.StatusCode);

        }

        [DataTestMethod]
        [DataRow("Hello")]
        public void TestMethod1(string expectedData)
        {
            var homeController = new HomeController();
            var actualData = homeController.Index();
            Assert.AreEqual(expectedData, actualData);
        }

    }
}
