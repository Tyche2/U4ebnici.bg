import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';

const usersRoutes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'details',
                children: [
                    { path: 'settings/:id', component: UserSettingsComponent }, // canActivate: [AuthGuard] },}
                    { path: ':adId/:id', component: UserDetailComponent }, // canActivate: [AuthGuard] },
                ]
            },
            { path: "messages", component: MessagesPageComponent},
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }
