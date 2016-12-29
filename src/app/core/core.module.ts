import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/services/auth.service';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AlertComponent,
        NavbarComponent
    ],
    declarations: [
        AlertComponent,
        NavbarComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        AlertService
    ]
})
export class CoreModule { }