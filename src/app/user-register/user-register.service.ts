import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstant } from '../url-constant/url-constant';
import { user } from './entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http : HttpClient) { 


  }

  // getUser(username){
  //   const token="Bearer "+localStorage.getItem('token')
  //   return  this.http.get<any>(`http://localhost:8080/ems/api/v1/user/${username}`, {headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization:token }), responseType:  'json'})
  // }

  getAllUserDetails():Observable<user[]>{
    return this.http.get<user[]>(UrlConstant.SERVER_PORT+"user/getAllUserDetail");
  }
}
