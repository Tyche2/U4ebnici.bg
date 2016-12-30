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
import { firebaseConfig, authConfig } from './environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { UserService } from './shared/model/users.service';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserDetailComponent,
    AnnouncementDetailComponent,
    NewAnnouncementComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

