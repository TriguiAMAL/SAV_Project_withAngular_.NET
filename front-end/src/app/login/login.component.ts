import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginClientService } from 'src/services/login-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public formBuilder: FormBuilder,

    private authservice: LoginClientService,
    private toastr: ToastrService,
    private router: Router
  ){}

  form = this.formBuilder.group({
    
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required]]    
})
signIn() {
  if (this.form.valid) {
    const loginData = {
      email: this.form.value.email as string,
      password: this.form.value.password as string
    };

    this.authservice.login(loginData).subscribe({
      next: (response) => {
        this.toastr.success('Login successful!', 'Success');
        console.log('Response:', response);
        this.router.navigate(['/home'])
      },
      error: (error) => {
        this.toastr.error('Invalid email or password.', 'Error');
        console.error('Error:', error);
      }
    });
  } else {
    this.toastr.warning('Please fill in all fields correctly.', 'Warning');
  }
}


}
