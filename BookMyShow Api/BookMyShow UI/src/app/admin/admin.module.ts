import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AddmovieComponent,AddtimeslotsComponent} from './index'
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AddmovieComponent,
    AddtimeslotsComponent,
    AdminComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports:[
    AddmovieComponent,
    AddtimeslotsComponent
  ]
})
export class AdminModule { }
