import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
constructor(private productservice:ProductService,private fb: FormBuilder, private router: Router) {}
selectedFile:any
   productForm= this.fb.group({
     productname: ['', [Validators.required]],
      productimage: ['', [Validators.required]],
      productprice: ['', [Validators.required]],
      producttitle: ['', [Validators.required]],
      productdescription:['', [Validators.required]]
    });
  
    createProduct() {
      console.log(this.productForm);
      if (this.productForm.invalid) {
     
        return;
      }
     const product_price=this.productForm.value.productprice||""
     const product_description=this.productForm.value.productdescription||""
     const product_title=this.productForm.value.producttitle||""
     const product_name=this.productForm.value.productname||""
     
      const formData = new FormData()
      formData.append('productimage',this.selectedFile)
      formData.append('productprice',product_price)
      formData.append('productdescription',product_description)
      formData.append('producttile',product_title)
      formData.append('productname',product_name)
      
      console.log(formData);
    
      this.productservice.createProduct(formData).subscribe({
        next:(res)=> this.router.navigate(['/product']),
        error:(error)=>console.log(error)
      })
     
    }
  goback(){
    this.router.navigate(['/product'])
  }
  selectFile(event:any){
    this.selectedFile=event.target.files[0]
    this.productForm.patchValue({
      productimage:this.selectedFile
    })
  }
  
}
