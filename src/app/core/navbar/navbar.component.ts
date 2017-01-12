import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AlertService } from './../alert/alert.service';
import { AuthService } from '../../auth/shared/auth.service';
import { UserService } from '../../users/shared/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private usersService: UserService
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

  onFacebookLogin() {
    this.authService.signInWithFacebook()
      .then(user => {
        let newUser = {};
        newUser['uid'] = user.auth.uid;
        newUser['dbemail'] = user.auth.email;
        newUser['name'] = user.auth.displayName;
        this.usersService.createNewUser(newUser);
      })
      .then(() => {
        this.alertService.success('Успешен вход', true);
        // TODO: Disable save button when have not full settings
        this.router.navigate(['user', 'details', 'settings', this.authService.userId]);
      })
      .catch(() => this.alertService.error('Неуспешен вход', true));
  }
}
