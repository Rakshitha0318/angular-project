import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
constructor(private userservice:UsersService ,private fb: FormBuilder, private router: Router) {}

 usersForm = this.fb.group({
    user_id: ['', [Validators.required,Validators.minLength(4)]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    dob: ['', [Validators.required]]
  });

  createUser() {
    console.log(this.usersForm);
    if (this.usersForm.invalid) {
   
      return;
    }

    const formData = this.usersForm.value;
    console.log(formData);
  
    this.userservice.createUser(formData).subscribe({
      next:(res)=> this.router.navigate(['/user-list']),
      error:(error)=>console.log(error)
    })
   
  }
goback(){
  this.router.navigate(['/user-list'])
}





}
