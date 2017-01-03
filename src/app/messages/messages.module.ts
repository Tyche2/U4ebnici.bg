import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementMessagesComponent } from './announcement-messages/announcement-messages.component';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './shared/messages.service';
import { MessagesRoutingModule } from './messages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { MessageAnswerComponent } from './message-answer/message-answer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MessagesRoutingModule
  ],
  declarations: [
    AnnouncementMessagesComponent,
    MessagesComponent,
    UserMessagesComponent,
    MessageAnswerComponent
  ],
  providers: [MessagesService]
})
export class MessagesModule { }
