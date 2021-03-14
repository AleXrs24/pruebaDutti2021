import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// Firebase
import firebase from 'firebase';
// Services
import { AuthService } from 'src/app/services/auth/auth.service';

// JSON
// import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;
  hidePassword: boolean = true;
  errorMessage: string = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6), Validators.email]],
      password: [ '', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]]
    });
  }

  registerUser() {
    if (this.registerForm.invalid) { return }
    // TODO : Falta integrar el servicio para registrar al usuario

    this.dataLoading = true;
    this.auth.signInWithCredentials(this.registerForm.value).then((userCredentials: firebase.auth.UserCredential) => {
      // console.log('User credentials: ', userCredentials);
      this.dataLoading = false;
      this.router.navigate(['/principal/ships']);
    }).catch(error => {
      console.error('Register fail: ', error);
      this.errorMessage = error.message;
      this.registerForm.reset();
      this.dataLoading = false;
    });

    // JSON simulando usuarios
    // var userLogin = this.registerForm.value;
    // usersList.push(userLogin)
    // console.log('User Register -->', usersList)
    // this.router.navigate(['/principal/ships'])

  }

}
