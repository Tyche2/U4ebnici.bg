import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { firebaseConfig } from './environments/firebase.config';
import {AngularFireModule} from 'angularfire2/index';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule }   from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsListComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,
    UserDetailComponent,
    AnnouncementDetailComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
