import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninComponent,SignupComponent} from './index'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,   
    AuthenticationRoutingModule
  ],
  exports:[
    SigninComponent,
    SignupComponent
  ]
})
export class AuthenticationModule { }
