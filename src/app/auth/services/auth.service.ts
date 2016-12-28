import { AlertService } from './../../_services/alert.service';
import { firebaseConfig } from './../../environments/firebase.config';
import { Http, Headers, Response } from '@angular/http';
import {database, initializeApp} from "firebase";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {Observable, Subject, BehaviorSubject} from "rxjs/Rx";
import {FirebaseAuth, FirebaseAuthState} from "angularfire2/index";
import {AuthInfo} from "../guards/auth-info";


export interface User {
    email: string;
    password: string;
    confirmPassword?: string;
}
var firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

@Injectable()
export class AuthService {
  static UNKNOWN_USER = new AuthInfo(null);
  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

  //loading = false;
  constructor(private router: Router, private alertService: AlertService, private auth: FirebaseAuth) {}
currentUser: any;

  signupUser(user: User) {
    //this.loading = true;
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((data)=>{
        this.alertService.success('Регистрацията е успешна', true);
        this.router.navigate(['/login']);
      })
      .catch((error)=> {
        this.alertService.error(error);
        //this.loading = false;
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((data)=>{
        this.alertService.success('Успешен вход', true);
        const authInfo = new AuthInfo(firebase.auth().currentUser);
        this.authInfo$.next(authInfo);
        this.router.navigate(['']);
    })
      .catch((error)=> {
        this.alertService.error(error);
        //this.loading = false;
      });
  }

  logout() {
    firebase.auth().signOut()
    .then((data)=>{
      this.alertService.success('Успешен изход', true);
      this.authInfo$.next(AuthService.UNKNOWN_USER);
      this.router.navigate(['/home']);
 });
  }
  isAuthenticated() {
    var user = firebase.auth().currentUser;
    if (user) {
      return user;
    } else {
      return false;
    }
  }
 
}