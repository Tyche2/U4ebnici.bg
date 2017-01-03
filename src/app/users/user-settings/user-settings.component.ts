import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../core/alert/alert.service';
import { AuthService } from '../../core/auth/services/auth.service';
import { User } from '../shared/user.model';
import { UserService } from '../shared/users.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
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
    private alertService: AlertService) { }

  onUpdate() {
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
