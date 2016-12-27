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
  constructor(private router: Router) {}
  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signinUser(user: User) {
    console.log(user);
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
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