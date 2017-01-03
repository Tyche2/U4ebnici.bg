import { AlertService } from './../alert/alert.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
  private router: Router,
  private alertService: AlertService) {
  }

  ngOnInit() {
   
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
