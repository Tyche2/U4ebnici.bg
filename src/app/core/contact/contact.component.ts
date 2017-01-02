import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
isAuthUid(){
    return this.authService.id;
  }
}
