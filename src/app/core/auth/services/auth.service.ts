import { AlertService } from '../../alert/alert.service';
import { firebaseConfig } from './../../../environments/firebase.config';
import { Http, Headers, Response } from '@angular/http';
import { database, initializeApp } from "firebase";
import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";
import { FirebaseAuth, FirebaseAuthState } from "angularfire2/index";
import { AuthInfo } from "../guards/auth-info";

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
  static USER_DATA;
  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);
  userData$: BehaviorSubject<any> = new BehaviorSubject<any>(AuthService.USER_DATA);
  //loading = false;
  constructor(private alertService: AlertService, private auth: FirebaseAuth) { }
  currentUser: any;

  signupUser(user: User) {
    //this.loading = true;
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        const userData = new BehaviorSubject(data);
        this.userData$.next(data);
      })
      .catch((error) => {
        this.alertService.error(error);
        //this.loading = false;
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        const authInfo = new AuthInfo(firebase.auth().currentUser);
        this.authInfo$.next(authInfo);
        //localStorage.setItem('username', user.email);
        //this.router.navigate(['home']);
      })
      .catch((error) => {
        this.alertService.error(error);
        //this.loading = false;
      });
  }

  logout() {
    firebase.auth().signOut()
      .then((data) => {
        this.authInfo$.next(AuthService.UNKNOWN_USER);
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