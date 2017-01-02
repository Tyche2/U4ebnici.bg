import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/services/auth.service';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { ConstantService } from './constant.service';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        AlertComponent,
        FooterComponent,
        NavbarComponent,
        ContactComponent
    ],
    declarations: [
        AlertComponent,
        FooterComponent,
        NavbarComponent,
        ContactComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        AlertService,
        ConstantService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
