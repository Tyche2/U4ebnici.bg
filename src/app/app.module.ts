import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { AuthModule } from './auth/auth.module';
import { firebaseConfig, authConfig } from './environments/firebase.config';
import { AppRoutingModule } from './app-routing.module';
import { MessagesModule } from './messages/messages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AnnouncementsModule,
    AuthModule,
    MessagesModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    UsersModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

