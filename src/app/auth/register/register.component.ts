import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from '../../core/alert/alert.service';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../../users/shared/users.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    myForm: FormGroup;
    myDBForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private userService: UserService,
        private alertService: AlertService,
        private router: Router
    ) { }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.compose([
                Validators.required,
                this.isEqualPassword.bind(this)
            ])],
        });
        this.myDBForm = this.fb.group({
            name: '',
            city: '',
            phone: '',
            skype: '',
            dbemail: '',
            uid: ''
        });
    }

    onSignUp() {
        this.authService.signUpUser(this.myForm.value)
            .then(data => {
                this.myDBForm.patchValue({ uid: data.uid });
                this.userService.createNewUser(this.myDBForm.value);
            })
            .then(() => {
                this.alertService.success('Регистрацията е успешна', true);
                setTimeout(() => this.router.navigate(['/home']), 2000);
            })
            .catch(err => {
                this.alertService.error(err.toString());
            });
    }

    isEmail(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return { noEmail: true };
        }
    }

    isEqualPassword(control: FormControl): { [s: string]: boolean } {
        if (!this.myForm) {
            return { passwordsNotMatch: true };
        }

        if (control.value !== this.myForm.controls['password'].value) {
            return { passwordsNotMatch: true };
        }
    }
}
