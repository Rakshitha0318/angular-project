import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import {Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

constructor(private router:Router,private productService:ProductService){

}
productlist:any[]=[];
search:any="";
currentPage:number=1;
limit:number=10;
total_page:number=1;
pages:number[]=[];

products:any[]=[];
ngOnInit(){
 this.getProduct() 
  
}
 getProduct(){
  this.productService.getProducts(this.search,this.currentPage,this.limit).subscribe({
    next:(res:any)=>{
      this.products = res.product_details;//network tab->response
      console.log(res);
      this.total_page = res.totalPages;//network tab

      this.pages = [];
      for(let i=1;i<=this.total_page;i++){
        this.pages.push(i);
      }
    },
    error:(error)=>console.log(error)
  })
}

viewMore(id:any){
  this.router.navigate(["product-details",id])
  localStorage.setItem('id',id)
}
deleteproduct(id:any){
  this.productService.deleteProduct(id).subscribe({
    next:(res)=>this.getProduct(),
    error:(error)=>console.log(error)
  
  })
}
searchProduct(){
this.getProduct();
}
previous(){

    this.currentPage--;
    this.getProduct();
  
}

next(){
  
    this.currentPage++;
    this.getProduct();
  
}

goTo(page:number){
  this.currentPage = page;
  this.getProduct();
}
createProduct(){
  this.router.navigate(['create-product'])
}
}