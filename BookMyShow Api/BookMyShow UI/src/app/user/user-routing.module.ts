import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedBookingComponent,HistoryComponent,MovieDetailsComponent,MybookingComponent, UserComponent } from './index';
import {AuthGuardService as AuthGuard} from '../shared/services/auth-guard.service'
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

const role={
  admin:'Admin',
  user:'User'
}

let routes: Routes = [
  {
      path: "",
      component: UserComponent,
      canActivate:[AuthGuard],
      data:{
          role:role.user
      },
      children: [
        {
          path:'movie/:movieId',component:MovieDetailsComponent
        },
        {
          path:'bookings',component:MybookingComponent
        },
        {
          path:'confirmed',component:ConfirmedBookingComponent
        },
        {
          path:'bookinghistory',component:HistoryComponent
        }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  exports: [RouterModule]
})

export class UserRoutingModule { }
