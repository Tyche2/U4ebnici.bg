import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserService } from './shared/users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailComponent,
    UserSettingsComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailComponent,
    UserSettingsComponent
  ],
  providers: [UserService]
})
export class UsersModule { }
