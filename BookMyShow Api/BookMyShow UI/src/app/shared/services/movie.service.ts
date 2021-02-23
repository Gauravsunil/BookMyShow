import { Injectable } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  userId:any=0;
role:any;
  rootUrl='api/movie';
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  setUserId(){
    this.userId=window.localStorage.getItem("userId")==null?0:window.localStorage.getItem("userId");
    this.role=window.localStorage.getItem("role");    
  }
  
  getMovies(){
    return this.http.get(this.rootUrl+'/movies/all');
  }

  getMovie(mid:any){
    return this.http.get(this.rootUrl+`/movies/${mid}`);
  }

  
  postBooking(bookMovie:any){
    this.http.post(this.rootUrl+'/movies',bookMovie)
    .subscribe(res=>{
      this.router.navigate(['/bookings']);
    })

  }

  getMyBookings():Observable<any[]>{
    return this.http.get<any[]>(`${this.rootUrl}/movies/mybookings/${this.userId}`);
  }


  deleteBooking(bookingId:any){

    return this.http.get( `${this.rootUrl}/movies/deletebooking/${bookingId}`);
  }

  confirmBooking(){
    return this.http.get(`${this.rootUrl}/movies/confirmbooking/${this.userId}`);
  }

  getBookingHistory(){
    return this.http.get(`${this.rootUrl}/movies/history/${this.userId}`);
  }

  postMovie(movie:any){
    console.log(movie);
    return  this.http.post(`${this.rootUrl}/movies/addmovie`,movie);
    
  }

  postTimeSlot(timeSlot:any){
    return this.http.post(`${this.rootUrl}/movies/addtimeslot`,timeSlot);
  }

  getTimeSlots(){
    return this.http.get(`${this.rootUrl}/movies/gettimeslots`);
  }

  getTimeSlot(movieId:any){
    return this.http.get(`${this.rootUrl}/movies/gettimeslot/${movieId}`);
  }

  getSearchMovies(movieName:any){
    return this.http.get(`${this.rootUrl}/movies/searchmovie/${movieName}`);
  }
}
