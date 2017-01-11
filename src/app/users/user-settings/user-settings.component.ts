import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { AlertService } from '../../core/alert/alert.service';
import { AuthService } from '../../auth/shared/auth.service';
import { User } from '../shared/user.model';
import { UserService } from '../shared/users.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})

export class UserSettingsComponent implements OnInit {
  user$: Observable<User>;
  userKey: string;
  myUpdateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService) { }

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

  onUpdate() {
    this.userService.updateUser(this.userKey, this.myUpdateForm.value)
      .then(() => this.alertService.success('Промените за записани', true))
      .catch(err => this.alertService.error(`Грешка при запис ${err}`));
  }
}
