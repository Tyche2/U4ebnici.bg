import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AlertService } from '../alert/alert.service';
import { AuthService } from '../../auth/shared/auth.service';
import { MessagesService } from '../../messages/shared/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      dbemail: '',
      notes: ''
    });
  }

  isAuthUid() {
    return this.authService.userId;
  }

  onSent() {
    this.messagesService.createNewContactMessage(this.myForm.value)
      .then(() => this.alertService.success('Съобщението е изпратено', true))
      .catch(err => this.alertService.error(`Грешка при изпращане на съобщение ${err}`));
  }
}
