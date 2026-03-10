import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
 constructor(private route:ActivatedRoute,private productService:ProductService){
 }
 product:any={}
 ngOnInit(){
  const id=Number(this.route.snapshot.paramMap.get('id'))
  if(!id){
    return
  }
  this.productService.getSingleProductDetail(id).subscribe(res=>{
    this.product=res.product_detail
  })
 }
}
