// partie registration hia sign up 
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginClientService } from 'src/services/login-client.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  
})
export class RegistrationComponent {
 
constructor(public formBuilder: FormBuilder,
  private authService:LoginClientService,
  private toastr: ToastrService,
  private router: Router
){}
isSubmitted: boolean = false;


passwordMatchValidator: ValidatorFn = (control: AbstractControl): null => {
  const password = control.get('password')
  const confirmPassword = control.get('confirmPassword')

  if (password && confirmPassword && password.value != confirmPassword.value)
    confirmPassword?.setErrors({ passwordMismatch: true })
  else
    confirmPassword?.setErrors(null)

  return null;
}

form = this.formBuilder.group({
  fullName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]],
  confirmPassword: [''],
}, { validators: this.passwordMatchValidator })
  

onSubmit() {
  this.isSubmitted = true;
  if (this.form.valid) {
    this.authService.createUser(this.form.value)
      .subscribe({
        next: (res: any) => {
          if (res.succeeded) {
            this.form.reset();
            this.isSubmitted = false;
            this.toastr.success('New user created!', 'Registration Successful');
            this.router.navigate(['/login'])
          }
        },
        error: err => {
          if (err.error.errors)
            err.error.errors.forEach((x: any) => {
              switch (x.code) {
                case "DuplicateUserName":
                  break;

                case "DuplicateEmail":
                  this.toastr.error('Email is already taken.', 'Registration Failed')
                  break;

                default:
                  this.toastr.error('Contact the developer', 'Registration Failed')
                  console.log(x);
                  break;
              }
            })
          else
            console.log('error:',err);
        }

      });
  }
}

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched)|| Boolean(control?.dirty))
  }


}
