import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  signinForm: any;
  role: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private movieService: MovieService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initializeSigninForm();
  }

  initializeSigninForm() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get formControls() {
    return this.signinForm.controls;
  }

  onSubmit() {
    this.authenticationService
      .signin(this.signinForm.value)
      .subscribe((res) => {
        if (res.status != 'Error') {
          this.toastr.success(res.message, 'SignIn', { timeOut: 3000 });
          window.localStorage.setItem('userId', res.id);
          window.localStorage.setItem('token', res.token);
          window.localStorage.setItem('role', res.role);
          this.role = localStorage.getItem('role');
          this.movieService.setUserId();
          this.role === 'User'
            ? this.router.navigate([`/dashboard`])
            : this.router.navigate([`/admin/addmovie`]);
        } else {
          this.toastr.error(res.message, 'SignIn', { timeOut: 3000 });
          this.initializeSigninForm();
        }
      });
  }
}
