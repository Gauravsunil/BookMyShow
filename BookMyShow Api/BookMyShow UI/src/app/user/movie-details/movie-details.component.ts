import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import { MovieService } from '../../shared/services/movie.service';
import { Booking } from '../../shared/models/booking.model';
import { TimeSlot } from 'src/app/shared/models/timeSlot.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {

  movieId:any;
  movie:any='';
  persons=1;
  timeSlot:any;
    
  
  constructor(
    private route:ActivatedRoute,
    private movieService:MovieService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.movieId=params.get("movieId");
      this.movieService.setUserId();
      this.movieService.getMovie(this.movieId)
      .subscribe(res=>{
        this.movie=res;
       });
       this.movieService.getTimeSlot(this.movieId).subscribe(res=>{
         this.timeSlot=res as TimeSlot;
       })
    })
  }

  noOfPerson(isIncrement=false){
  
    if(!isIncrement){
      if(this.persons>1){
        this.persons--;
      }
    }else{
      this.persons++;
    }
  }


  postBooking(movie:any){
    var booking=new Booking(this.movieService.userId,movie.id,this.persons);  
    this.movieService.postBooking(booking);    
  }

}
