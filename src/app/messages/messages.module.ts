import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './messages.component';
import { AnnouncementMessagesComponent } from './announcement-messages/announcement-messages.component';
import { MessagesService } from './shared/messages.service';
import { SharedModule } from '../shared/shared.module';
import { UserMessagesComponent } from './user-messages/user-messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule { }
