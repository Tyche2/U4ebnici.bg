import { AlertService } from './../alert/alert.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  isAuth() {
    return this.authService.isAuthenticated;
  }

  isAuthUid() {
    return this.authService.userId;
  }

  logout() {
    this.authService.logout();
    this.alertService.success('Успешен изход', true);
    this.router.navigate(['home']);
  }
}
