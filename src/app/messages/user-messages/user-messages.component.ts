import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/shared/auth.service';
import { MessagesService } from './../shared/messages.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit {
  messages: Observable<Message[]>;
  user: string;
  messagesType: string;

  constructor(
    private messagesService: MessagesService,
    private authService: AuthService
  ) { }

  isAuthUid() {
    return this.authService.userId;
  }

  ngOnInit() {
    this.messagesType = 'received';
    let userUID = this.authService.userId;

    this.messages = this.messagesService.findMessagesByUserKey(userUID);
    this.user = userUID;
  }

  onMessagesTypeChange(ev: any) {
    this.messagesType = ev.target.getAttribute('data');
  }
}