import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent,AddmovieComponent,AddtimeslotsComponent } from './index';
import {AuthGuardService as AuthGuard} from '../shared/services/auth-guard.service'
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

const role={
  admin:'Admin',
  user:'User'
}

let routes: Routes = [
  {
      path: "",
      component: AdminComponent,
      canActivate:[AuthGuard],
      data:{
        role:role.admin
      },
      children: [
        {
          path:'addmovie',component:AddmovieComponent
        },
        {
          path:'timeslot',component:AddtimeslotsComponent
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

export class AdminRoutingModule { }
