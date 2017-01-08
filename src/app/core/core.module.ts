import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/shared/auth.guard';
import { AuthService } from '../auth/shared/auth.service';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { ContactComponent } from './contact/contact.component';
import { ConstantService } from './services/constant.service';
import { DataService } from './services/data.service';
import { FooterComponent } from './footer/footer.component';
import { LocalStorageService } from './services/local-storage.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './../shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { UserService } from '../users/shared/users.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
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
        ConstantService,
        DataService,
        LocalStorageService,
        UserService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
