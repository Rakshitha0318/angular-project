import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  private baseUrl = "http://localhost:3031"; 

  constructor(private http: HttpClient) { }

  createMark(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mark`, data);
  }
  getMark():Observable<any>{
    return this.http.get(`${this.baseUrl}/mark`);

  }
   deleteMark(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/mark/${id}`);

  }
   getSingleMark(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/mark/${id}`);

  }
    updateMark(id:any,data:any):Observable<any>{
      return this.http.patch(`${this.baseUrl}/mark/${id}`,data);
    }

}