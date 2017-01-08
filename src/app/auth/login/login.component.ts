import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

import { AlertService } from '../../core/alert/alert.service';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';
    returnUrl: string;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService
    ) { }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSignIn(user) {
        this.authService.signInUser(this.myForm.value)
            .then(() => {
                this.alertService.success('Успешен вход', true);
                this.router.navigate([this.returnUrl]);
            })
            .catch(() => {
                this.alertService.error('Неуспешен вход', true);
            });
    }
}