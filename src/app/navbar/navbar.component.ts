import { firebaseConfig } from './../environments/firebase.config';
import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase";

var firebase = require('firebase');

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
currentUser: any;

  constructor(private authService: AuthService) {
        this.currentUser = firebase.auth().currentUser;
        console.log(this.currentUser);
    }

 logout() {
   this.authService.logout();
 }

}
