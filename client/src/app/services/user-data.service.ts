import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  registrationData:any={};
  private userData :any;

  constructor(private http: HttpClient) { }
  getUserDataByEmail(email:string):Observable<any>{
    //return this.http.get<any>(`http://localhost:9992/userdata/${email}`)
    return this.http.get<any>(`http://localhost:9992/userdata`)
  }

  setUser(data:any){
    this.userData=data;
  }
  getUser(){
    return this.userData;
  }
}
