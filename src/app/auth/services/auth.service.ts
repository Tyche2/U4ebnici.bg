import { AlertService } from './../../_services/alert.service';
import { firebaseConfig } from './../../environments/firebase.config';
import {database, initializeApp} from "firebase";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


export interface User {
    email: string;
    password: string;
    confirmPassword?: string;
}
var firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

@Injectable()
export class AuthService {
  loading = false;
  constructor(private router: Router, private alertService: AlertService) {}

  signupUser(user: User) {
    this.loading = true;
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((data)=>{
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      })
      .catch((error)=> {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((data)=>{
        this.alertService.success('Registration successful', true);
    })
      .catch((error)=> {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  logout() {
    firebase.auth().signOut()
    .then((data)=>{
        this.alertService.success('Logout successful', true);
    })
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}