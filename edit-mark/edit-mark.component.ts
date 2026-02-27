import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, RouterModule,Router} from '@angular/router';
import { MarkService } from '../marks.service';


@Component({
  selector: 'app-edit-mark',
  standalone: true,
  imports: [ReactiveFormsModule ,RouterModule,CommonModule],
  templateUrl: './edit-mark.component.html',
  styleUrl: './edit-mark.component.css'
})
export class EditMarkComponent implements OnInit{
constructor(private fb:FormBuilder,private router:Router,private route:ActivatedRoute,private markService:MarkService){

}
markId:any=[];
marksForm!:FormGroup 
ngOnInit(): void {
  this.marksForm=this.fb.group({
      student_id: ['', [Validators.required,Validators.minLength(4)]],
      subject: ['', [Validators.required]],
      score: ['', [Validators.required]],
      exam_year: ['', [Validators.required]]
    });
     this.markId=this.route.snapshot.paramMap.get('markId');
     this.markService.getSingleMark(this.markId).subscribe({
      next:(res)=>this.marksForm.patchValue(res)
     })
     
}
updateUser(){
 if (this.marksForm.invalid) {
      alert('error')
      return;
    }

    const formData = this.marksForm.value;
    console.log(this.markId);
    this.markService.updateMark(this.markId,formData).subscribe({
      next:(res)=> this.router.navigate(['/mark-list']),
      error:(error)=>console.log(error)
    })
}

}
