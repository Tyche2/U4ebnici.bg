import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './../../core/auth/services/auth.service';
import { MessagesService } from './../shared/messages.service';
import { Message } from '../shared/message.model';


@Component({
    selector: 'messages',
    templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
    messages: Observable<Message[]>;
    @Input() message: Message;

    constructor(
        private messagesService: MessagesService,
        private authService: AuthService) { }

    ngOnInit() { 
    let userUID = this.authService.id;
    this.messages = this.messagesService.findMessagesByUserKey(userUID);
}
}