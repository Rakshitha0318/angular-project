import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
constructor(private router:Router,private userservice:UsersService){}
userlist:any[]=[];
search:any="";
currentPage:number=1;
limit:number=10;
total_page:number=1;
pages:number[]=[];
ngOnInit(){
  this.getUsers();
  
}
getUsers(){

   this.userservice.getUsers(this.search,this.limit,this.currentPage).subscribe({
    next:(res)=>{
      this.userlist=res.user_details.rows
      this.total_page=res.totalPages;
      this.currentPage=res.currentPage;
      this.pages=[];
      for(let i=1;i<=this.total_page;i++){
        this.pages.push(i);
      }

    },
    error:(error)=>console.log(error)
   })
}

createUser(){
  this.router.navigate(['user'])
}
deleteUser(id:any){
  this.userservice.deleteUser(id).subscribe({
    next:(res)=>this.getUsers(),
    error:(error)=>console.log(error)
  })
}
editUser(id:any){
  this.router.navigate(['users',id])
}
searchUser(){
this.getUsers()
}
previous(){
  this.currentPage--;//this.page=this.page-1
  this.getUsers()
}
next(){
  this.currentPage++;
  this.getUsers()
}

goTo(page:number){
  console.log(page)
this.currentPage=page;
this.getUsers();
}

}
