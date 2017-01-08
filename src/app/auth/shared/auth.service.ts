import { AlertService } from '../../core/alert/alert.service';
import { firebaseConfig } from '../../environments/firebase.config';
import { Http, Headers, Response } from '@angular/http';
import { database, initializeApp } from 'firebase';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

export interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}
let firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

@Injectable()
export class AuthService {
  
  static USER_DATA;
  private authState: FirebaseAuthState = null;
  currentUser: any;
  
  userData$: BehaviorSubject<any> = new BehaviorSubject<any>(AuthService.USER_DATA);

  // loading = false;
  constructor(private alertService: AlertService, public auth: FirebaseAuth) {
    auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }
  signupUser(user: User) {

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        const userData = new BehaviorSubject(data);
        this.userData$.next(data);
      })
      .catch((error) => {
        this.alertService.error(error);
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        
      })
      .catch((error) => {
        this.alertService.error(error);
      });
  }

  logout() {
    firebase.auth().signOut()
      .then((data) => {
       
      });
  }
}
