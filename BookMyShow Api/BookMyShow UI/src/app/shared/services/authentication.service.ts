import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginResponse, Response } from '../models/response.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  rootUrl="api/authentication"
  constructor(
    private http:HttpClient
  ) { }

  signUp(data:any){
return this.http.post<Response>(this.rootUrl+'/signup',data);
  }

  signin(data:any){
    return this.http.post<LoginResponse>(this.rootUrl+'/signin',data);
  }
  
  public isAuthenticated():boolean{
    const token=window.localStorage.getItem("token");
    return (token!=null)?true:false;
    
  }
}
