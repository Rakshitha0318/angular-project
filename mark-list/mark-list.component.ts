import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkService } from '../marks.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-mark-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mark-list.component.html',
  styleUrl: './mark-list.component.css'
})

export class MarkListComponent implements OnInit {
constructor(private router:Router,private markservice:MarkService){
}
marklist:any[]=[];
ngOnInit(){
this.getMark();
   
}
 getMark (){
  this.markservice.getMark().subscribe({
      next:(res)=> this.marklist=res.mark,
      error:(error)=>console.log(error)
    })
}
createUser(){
  this.router.navigate(['mark'])
}
deleteMark(id:any){
  this.markservice.deleteMark(id).subscribe({
    next:(res)=>this.getMark(),
    error:(error)=>console.log(error)
  
  })
}
editMark(id:any){
  this.router.navigate(['marks',id])
  
}
}
