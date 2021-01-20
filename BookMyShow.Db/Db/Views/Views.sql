
  CREATE VIEW BookingView AS
  SELECT Bookings.Id,Movies.[name],Bookings.[Status],Bookings.Quantity,Movies.Price,Bookings.UserId 
  from Bookings INNER JOIN Movies on Bookings.MovieId=Movies.Id 

  SELECT * FROM BookingView where UserId='8ac5d7cb-5697-4cde-916f-4fab3e03b31f'

  ALTER VIEW MovieTimeSlot AS
  SELECT MovieTimeSlots.StartTime,MovieTimeSlots.EndTime,Movies.Id 
  FROM MovieTimeSlots INNER JOIN Movies on Movies.TimeSlotId=MovieTimeSlots.Id;

  SELECT * FROM MovieTimeSlot where Id=2;