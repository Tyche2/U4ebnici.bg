import { NewAnnouncementComponent } from './../new-announcement/new-announcement.component';
import { AuthGuard } from './../auth/guards/auth.guard';
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
  {
    path: 'userdetail',
    children: [
      {
        path: ':id',
        children: [
          { path: '', component: UserDetailComponent },
          { path: 'new', component: NewAnnouncementComponent }
        ]
      }
    ]
  },
  { path: 'detail/:id', component: AnnouncementDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}