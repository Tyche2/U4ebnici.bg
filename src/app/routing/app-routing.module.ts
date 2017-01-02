import { UserSettingsComponent } from '../users/user-settings/user-settings.component';
import { AuthGuard } from './../core/auth/guards/auth.guard';
import { NewAnnouncementComponent } from '../announcements/new-announcement/new-announcement.component';
import { RegisterComponent } from '../users/register/register.component';
import { AnnouncementDetailComponent } from '../announcements/announcement-detail/announcement-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../users/login/login.component';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import { UserDetailComponent } from '../users/user-detail/user-detail.component';
import { UserAnnouncementsComponent } from '../announcements/user-announcements/user-announcements.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AnnouncementsComponent },
  { path: 'user-announcements', component: UserAnnouncementsComponent },
  { path: 'userdetail/:id', component: UserSettingsComponent },//, canActivate: [AuthGuard] },
  { path: 'detail/new', component: NewAnnouncementComponent },
  { path: 'detail/:id', component: AnnouncementDetailComponent },
  { path: 'detail/:adId/:id', component: UserDetailComponent },//, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }