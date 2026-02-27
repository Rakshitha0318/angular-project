import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import {Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

constructor(private router:Router,private productService:ProductService){

}

products:any[]=[];
ngOnInit(){
 this.productService. getProducts().subscribe(res=>{
  this.products=res.products;
 })
  
}
viewMore(id:any){
  this.router.navigate(["product-details",id])
  localStorage.setItem('id',id)
}

}