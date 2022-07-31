import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=environment.APIURL
  

  constructor(private http:HttpClient) { }

  signUp(data:any) {
    return this.http.post(this.url+"/api/register",data)

    
  }
  logIn(data:any) {
    return this.http.post(this.url+"/api/login",data)


  }
}
