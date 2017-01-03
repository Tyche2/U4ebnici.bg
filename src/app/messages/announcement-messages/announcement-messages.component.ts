import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MessagesService } from './../shared/messages.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-announcement-messages',
  templateUrl: './announcement-messages.component.html',
  styleUrls: ['./announcement-messages.component.css']
})
export class AnnouncementMessagesComponent implements OnInit {
  messages: Observable<Message[]>;
  announcementKey: string;

  constructor(
    private messagesService: MessagesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.announcementKey = this.route.snapshot.params['id'];
    this.messages = this.messagesService.findMessagesByAnnouncementKey(this.announcementKey);
  }
}
