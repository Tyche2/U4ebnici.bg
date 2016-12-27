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
  { path: 'userdetail/:user', component: UserDetailComponent },
  { path: 'detail/:id', component: AnnouncementDetailComponent },
<<<<<<< HEAD
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
=======
  { path: 'login', component: LoginComponent }
>>>>>>> eeb488a73a360b1b7d510f393e3171d5a261c300
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}