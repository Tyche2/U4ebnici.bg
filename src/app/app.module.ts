import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { firebaseConfig, authConfig } from './environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AppRoutingModule } from './app-routing.module';
import { MessagesModule } from './messages/messages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './users/shared/users.service';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AnnouncementsModule,
    BrowserModule,
    CoreModule,
    HttpModule,
    AppRoutingModule,
    MessagesModule,
    SharedModule,
    UsersModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

