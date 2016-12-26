import { AnnouncementDetailComponent } from './../announcement-detail/announcement-detail.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }  from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'userdetail/:user',component: UserDetailComponent },
  { path: 'detail/:id', component: AnnouncementDetailComponent},
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}