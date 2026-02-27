import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkService } from '../marks.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marks',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './marks.component.html',
  styleUrl: './marks.component.css'
})
export class MarksComponent {

  constructor(private markservice:MarkService ,private fb: FormBuilder, private router: Router) {}

  marksForm = this.fb.group({
    student_id: ['', [Validators.required,Validators.minLength(4)]],
    subject: ['', [Validators.required]],
    score: ['', [Validators.required]],
    exam_year: ['', [Validators.required]]
  });

  createUser() {
    
    if (this.marksForm.invalid) {
  Swal.fire({
    title: 'Error',
    text: 'Somthing went wrong',
    icon: 'error',
    confirmButtonText: 'OK'
  });
      return;
    }

    const formData = this.marksForm.value;
    console.log(formData);
  
    this.markservice.createMark(formData).subscribe({
      next:(res)=> this.router.navigate(['/mark-list']),
      error:(error)=>console.log(error)
    })
   
  }
goback(){
  this.router.navigate(['/mark-list'])
}

}