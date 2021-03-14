import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// Firebase
import firebase from 'firebase';
// Services
import { AuthService } from 'src/app/services/auth/auth.service';
// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  // unregistered: boolean = false;
  errorMessage: string = null;
  invalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [ '', [Validators.required,Validators.email]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }
  loginUser() {
    if (this.loginForm.invalid) { return }
    // TODO : Falta integrar el servicio para autentificar al usuario

    this.dataLoading = true;
    this.auth.logInWithCredentials(this.loginForm.value).then((userCredentials: firebase.auth.UserCredential) => {
      // console.log('User credentials: ', userCredentials);
      this.dataLoading = false;
      this.router.navigate(['/principal/ships']);
    }).catch(error => {
      console.error('Login fail: ', error);
      this.errorMessage = error.message;
      this.loginForm.controls['password'].setValue('');
      this.dataLoading = false;
    });

    // JSON simulando usuarios
    // var userLogin = this.loginForm.value.username;
    // var filterJson = this.users.filter(function (user) { return user.first_name === userLogin  });
    // if (filterJson.length > 0) {
    //   this.router.navigate(['/principal/ships'])
    // } else {
    //   this.unregistered = true;
    // }
  }
}

