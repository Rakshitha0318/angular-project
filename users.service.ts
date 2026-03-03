import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "http://localhost:3031";

  constructor(private http: HttpClient) { }

  
  createUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, data);
  }


  getUsers(search:any,limit:number,page:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user?search=${search}&limit=${limit}&page=${page}`);
  }

  getSingleUser(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }


  updateUser(id: any, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/user/${id}`, data);
  }


  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/${id}`);
  }
}