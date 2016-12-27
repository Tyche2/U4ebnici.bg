import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { AppComponent } from './app.component';
import { firebaseConfig, authConfig } from './environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule }   from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { ToBGNMoneyPipe, SortPipe, TopPipe, GetUserPipe } from './pipes';
import { UserService } from './shared/model/users.service';
import { RegisterComponent } from './register/register.component';
import { AuthService } from "./auth/services/auth.service";
import { AuthGuard } from "./auth/guards/auth.guard";
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsListComponent,
    LoginComponent,
	RegisterComponent,
    HomeComponent,
    UserDetailComponent,
    AnnouncementDetailComponent,
    ToBGNMoneyPipe,
    SortPipe,
    TopPipe,
    GetUserPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig) 
  ],
  providers: [AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
