import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginUser, SignupUser } from '../../models/model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'survey-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  loginForm: FormGroup;
  returnUrl: string;
  showLogin = true;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.createRegisterForm();
    this.createLoginForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  createRegisterForm() {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    })
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  resetRegisterForm() {
    this.registerForm.reset();
  }

  resetLoginForm() {
    this.loginForm.reset();
  }

  loginUser() {
    const loginUser: LoginUser = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    };

    if (this.loginForm.valid) {
      this.authService.login(loginUser).subscribe(res => {
        this.router.navigate([this.returnUrl]);
      }, (error) => {
        console.error('error:' + error.message);
      }, () => {
        this.resetLoginForm();
      });
    }
  }

  registerUser() {
    const user: SignupUser = {
      firstName: this.registerForm.controls['firstName'].value,
      lastName: this.registerForm.controls['lastName'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value
    };
    if (this.registerForm.valid) {
      this.authService.register(user).subscribe(res => {
        this.router.navigate(['/home']);
      }, (error) => {
        console.error('error', error);
      }, () => this.resetRegisterForm());
    }

  }

  get password() {
    return this.registerForm.controls['password'] as FormControl;
  }

  get email() {
    return this.loginForm.controls['email'] as FormControl;
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'] as FormControl;
  }

  onSubmit() {
    this.router.navigate(['/home']);

  }

}
