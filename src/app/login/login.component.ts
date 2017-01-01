import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../core/auth/services/auth.service';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';
    returnUrl:string;

    constructor(
        private fb: FormBuilder, 
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        ) {}
    onSignin(user) {
      this.authService.signinUser(this.myForm.value);   
      this.router.navigate([this.returnUrl]);
    } 

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}