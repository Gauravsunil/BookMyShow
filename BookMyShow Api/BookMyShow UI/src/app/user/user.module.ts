import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ConfirmedBookingComponent,MovieDetailsComponent,HistoryComponent,MybookingComponent} from './index'
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ConfirmedBookingComponent,
    MovieDetailsComponent,
    HistoryComponent,
    MybookingComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports:[
    ConfirmedBookingComponent,
    MovieDetailsComponent,
    HistoryComponent,
    MybookingComponent
  ]
})
export class UserModule { }
