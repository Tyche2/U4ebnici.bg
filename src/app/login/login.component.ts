import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from "../auth/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';
    constructor(private fb: FormBuilder, private authService: AuthService) {}
    onSignin() {
      this.authService.signinUser(this.myForm.value);
    }

    ngOnInit():any {

        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}