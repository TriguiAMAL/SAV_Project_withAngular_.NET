import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginClientService {

  constructor(private Http: HttpClient) { }

  baseURL='https://localhost:7081/api'
  createUser(fromData:any){
   return  this.Http.post(this.baseURL+'/signup', fromData);
  }


  login(credentials: { email: string, password: string }): Observable<any> {
    return this.Http.post(`${this.baseURL}/login`, credentials);
  }







}
