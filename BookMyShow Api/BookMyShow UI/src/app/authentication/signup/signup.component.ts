import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  signupForm: any;
  status = '';
  message = '';
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signupFormInitializer();
  }
  signupFormInitializer() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
      role: new FormControl('', Validators.required),
    });
  }
  get formControls() {
    return this.signupForm.controls;
  }
  onSubmit() {
    this.authenticationService
      .signUp(this.signupForm.value)
      .subscribe((res) => {
        res.status === 'Error'
          ? this.toastr.error(res.message)
          : this.toastr.success(res.message);
        this.signupFormInitializer();
      });
  }
}
