import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './../../core/auth/services/auth.service';
import { MessagesService } from './../shared/messages.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css'],
  providers: [MessagesService]
})
export class MessagesPageComponent implements OnInit {
messages: Observable<Message[]>;
user: string; 

    constructor(
        private messagesService: MessagesService,
        private authService: AuthService) { }
isAuthUid(){
    return this.authService.id;
  }
    ngOnInit() { 
    let userUID = this.authService.id;
    
    this.messages = this.messagesService.findMessagesByUserKey(userUID);
    this.user = userUID;
}
}