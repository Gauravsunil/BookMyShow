import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  bookingHistory: any;

  ngOnInit(): void {
    this.movieService.getBookingHistory().subscribe((res) => {
      this.bookingHistory = res;
      
    });
  }
}
