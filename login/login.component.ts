import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth:AuthService,private fb: FormBuilder, private router: Router) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

 
  
  submit() {
    if (this.loginForm.invalid) {
      alert('All fields are mandatory');
      return;
    }

    console.log(this.loginForm.status);

    let email = this.loginForm.value.email || '';
    let password = this.loginForm.value.password || '';

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    this.router.navigate(['/product']);
    if( email=='rakshitha@gmail.com'&& password=='123456'){
      this.auth.login();
    }
  }
  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }


}
