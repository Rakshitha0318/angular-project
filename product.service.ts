import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl='http://localhost:3031';
  constructor(private http:HttpClient) { }

  getSingleProductDetail(id:any):Observable<any>{
    return this.http.get(this.baseUrl+'/product/'+id)
  }
  createProduct(data:any):Observable<any>{
    return this.http.post(this.baseUrl+'/product',data)
  }
 deleteProduct(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+'/product/'+id)
  }

  
  
 getProducts(search:any,page:number,limit:number):Observable<any>{
  return this.http.get(`${this.baseUrl}/product?search=${search}&limit=${limit}&page=${page}`)
}
}
