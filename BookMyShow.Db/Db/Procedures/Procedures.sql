
  CREATE PROCEDURE MyBookings(@UserId nvarchar(MAX),@Status bit) AS
  Select Bookings.Id,Movies.[name],Bookings.[Status],Bookings.Quantity,Movies.Price from Bookings INNER JOIN Movies on Bookings.MovieId=Movies.Id where Bookings.UserId=@UserId AND Bookings.Status=@Status;

  EXEC MyBookings @UserId='febaeaa2-dc7c-4420-95a4-e652435dbbb4',@Status=1

