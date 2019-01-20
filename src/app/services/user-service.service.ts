import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = 'https://qeditor.herokuapp.com/'
  constructor(private http: HttpClient) { }

  login(loginDetail:IUser) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post(`${this.url}user/login`,loginDetail).toPromise();
  }

  addUser(userDetail: IUser) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post(`${this.url}user`,userDetail).toPromise();
  }
}
