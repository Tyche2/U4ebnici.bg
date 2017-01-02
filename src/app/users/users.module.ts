import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './shared/users.service';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MessagesService } from './shared/messages.service';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { AnnouncementMessagesComponent } from './announcement-messages/announcement-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailComponent,
    UserSettingsComponent,
    UserMessagesComponent,
    AnnouncementMessagesComponent
  ],
  providers: [UserService, MessagesService]
})
export class UsersModule { }
