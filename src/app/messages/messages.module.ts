import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnnouncementMessagesComponent } from './announcement-messages/announcement-messages.component';
import { MessageAnswerComponent } from './message-answer/message-answer.component';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './shared/messages.service';
import { MessagesRoutingModule } from './messages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserMessagesComponent } from './user-messages/user-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
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
