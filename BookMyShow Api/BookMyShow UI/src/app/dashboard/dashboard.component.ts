import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private movieService: MovieService) {}
  movies: any;
  ngOnInit(): void {
    this.movieService.setUserId();
   this.initializeDashboard();
  }

  initializeDashboard(){
    this.movieService.getMovies().subscribe((res) => {
      this.movies = res;
    });
  }
  searchMovie(event:any){
    (event.target.value!='')?this.movieService.getSearchMovies(event.target.value).subscribe(res=>{
      this.movies=res;
    }):this.initializeDashboard();
  }
}
