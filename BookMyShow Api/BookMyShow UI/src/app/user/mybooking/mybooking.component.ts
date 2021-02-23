import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
})
export class MybookingComponent implements OnInit {
  constructor(private movieService: MovieService, private router: Router) {}

  myBookings: any[] = [];
  totalPrice = 0;

  ngOnInit(): void {
    this.initializeMyBooking();
  }

  initializeMyBooking() {
    this.movieService.getMyBookings().subscribe((res) => {
      this.myBookings = res;
      this.totalPrice = this.myBookings
        .map((element) => {
          return element.Quantity * element.Price;
        })
        .reduce((total: any, value: any) => {
          return total + value;
        });
    });
  }

  deleteBooking(bookingId: any) {
    this.movieService.deleteBooking(bookingId).subscribe((res) => {
      this.initializeMyBooking();
    });
  }

  confirmBooking() {
    this.movieService.confirmBooking().subscribe((res) => {
      this.router.navigate(['/user/confirmed']);
    });
  }
}
