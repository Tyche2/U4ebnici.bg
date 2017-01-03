import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertService } from '../../core/alert/alert.service';
import { Message } from '../../messages/shared/message.model';
import { MessagesService } from '../../messages/shared/messages.service';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-message-answer',
  templateUrl: './message-answer.component.html',
  styleUrls: ['./message-answer.component.css']
})

export class MessageAnswerComponent implements OnInit {
  myMessageForm: FormGroup;
  announcementKey: string;
  userUID: string;
  toUserID: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService) { }

  ngOnInit() {
    this.announcementKey = this.route.snapshot.params['id'];
    this.toUserID = this.route.snapshot.params['uid'];

    this.myMessageForm = this.fb.group({
      announcementid: '',
      touserid: '',
      answered: '',
      fromuserid: '',
      read: '',
      sent: '',
      msgText: ''
    });
  }

  onSent() {
    this.userUID = this.authService.id;
    let currentdate = new Date();
    let datetime = currentdate.getDate() + '/'
                + (currentdate.getMonth() + 1) + '/'
                + currentdate.getFullYear() + ' @ '
                + currentdate.getHours() + ':'
                + currentdate.getMinutes() + ':'
                + currentdate.getSeconds();
    this.myMessageForm.patchValue({fromuserid: this.userUID});
    this.myMessageForm.patchValue({touserid: this.toUserID});
    this.myMessageForm.patchValue({answered: false});
    this.myMessageForm.patchValue({read: false});
    this.myMessageForm.patchValue({sent: datetime});
    this.myMessageForm.patchValue({announcementid: this.announcementKey});

    this.messagesService.createNewMessage(this.myMessageForm.value)
    .subscribe(
              () => {
                  this.alertService.success('Съобщението е изпратено', true);
              },
              err => {
                  this.alertService.error(`Грешка при изпращане на съобщение ${err}`);
                }
          );
  }
}
