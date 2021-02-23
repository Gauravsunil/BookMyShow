import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { MovieService } from '../shared/services/movie.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    public movieService:MovieService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.movieService.setUserId();
  }

  logout(){
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("role");
    this.movieService.setUserId();
    this.router.navigate(['']);
  }
}
