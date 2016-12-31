import { AlertService } from './../core/alert/alert.service';
import { AuthService } from './../core/auth/services/auth.service';
import { UserService } from './../shared/model/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/model/user';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
  providers: [UserService]
})

export class UserSettingsComponent implements OnInit {
  user$: any;
  userKey: string;
  myUpdateForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService)
  { }
onUpdate(){
  //console.log(this.myUpdateForm.value);
  this.userService.updateUser(this.user$.$key, this.myUpdateForm.value)
          .subscribe(
              () => {
                  this.alertService.success('Промените за записани', true);
              },
              err => alert(`error saving lesson ${err}`)
          );
}
  ngOnInit() {
    this.userKey = this.route.snapshot.params['id'];

    this.user$ = this.userService.getUserByKey(this.userKey);
            
this.myUpdateForm = this.fb.group({
            name: '',
            city: '',
            phone: '',
            skype: '',
            dbemail: '',
            uid: ''
        }); 
  }
}
