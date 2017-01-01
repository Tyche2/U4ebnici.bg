import { UserSettingsComponent } from './../user-settings/user-settings.component';
import { AuthGuard } from './../core/auth/guards/auth.guard';
import { NewAnnouncementComponent } from './../new-announcement/new-announcement.component';
import { RegisterComponent } from './../register/register.component';
import { AnnouncementDetailComponent } from './../announcement-detail/announcement-detail.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }  from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'userdetail/:id', component: UserSettingsComponent},//, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: AnnouncementDetailComponent},
  //{ path: 'detail/new', component: NewAnnouncementComponent },
  { path: 'detail/:adId/:id', component: UserDetailComponent},//, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}