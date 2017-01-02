import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './../../core/auth/services/auth.service';
import { MessagesService } from './../shared/messages.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-announcement-messages',
  templateUrl: './announcement-messages.component.html',
  styleUrls: ['./announcement-messages.component.css']
})
export class AnnouncementMessagesComponent implements OnInit {
  messages: Observable<Message[]>;
  announcementId: string;

  constructor(
    private messagesService: MessagesService,
    private authService: AuthService
  ) { }

  isAuthUid() {
    return this.authService.id;
  }

  ngOnInit() {
    this.announcementId = '-KZvCrt-9ENN2P-pwaJT';
    this.messages = this.messagesService.findMessagesByAnnouncementKey(this.announcementId);
    console.log(this.messages);
  }
}
