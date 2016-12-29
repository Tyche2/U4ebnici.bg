import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/services/auth.service';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { NavbarComponent } from './navbar/navbar.component';
import { throwIfAlreadyLoaded } from './module-import-guard';

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
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
