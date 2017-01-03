import { AuthGuard } from './../core/auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const usersRoutes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'details',
                children: [
                    { path: 'settings/:id', component: UserSettingsComponent, canActivate: [AuthGuard] }, // canActivate: [AuthGuard] },}
                    { path: ':adId/:id', component: UserDetailComponent,canActivate: [AuthGuard]  }, // canActivate: [AuthGuard] },
                ]
            }
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
