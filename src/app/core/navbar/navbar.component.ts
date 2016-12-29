import { Component, OnInit } from '@angular/core';

import { AuthInfo } from '../auth/guards/auth-info';
import { AuthService } from '../auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  authInfo: AuthInfo;

  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    this.authService.authInfo$.subscribe(authInfo => this.authInfo = authInfo);

  }
  logout() {
    this.authService.logout();
  }

}