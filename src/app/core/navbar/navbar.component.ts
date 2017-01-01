import { AlertService } from './../alert/alert.service';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService,
  private router: Router,
  private alertService: AlertService) {
  }

  ngOnInit() {
    this.authService.authInfo$.subscribe(authInfo => this.authInfo = authInfo);
  }

  isAuth() {
     return this.authService.authenticated;
  }

  isAuthUid(){
    return this.authService.id;
  }

  logout() {
    this.authService.logout();
            this.alertService.success('Успешен изход', true);
            this.router.navigate(['home']);
  }

}
