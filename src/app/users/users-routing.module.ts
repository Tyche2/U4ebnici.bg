import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { AnnouncementMessagesComponent } from './announcement-messages/announcement-messages.component';

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
            { path: 'messages', component: UserMessagesComponent },
            { path: 'messages/announcement', component: AnnouncementMessagesComponent },
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
