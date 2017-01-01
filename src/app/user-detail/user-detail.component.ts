import { AlertService } from './../core/alert/alert.service';
import { MessagesService } from './../shared/model/messages.service';
import { Message } from './../shared/model/message';
import { Announcement } from '../announcements/shared/announcement.model';
import { AnnouncementService } from '../announcements/shared/announcement.service';
import { database, initializeApp } from "firebase";
import { UserService } from './../shared/model/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../shared/model/user';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

var firebase = require('firebase');

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations: [
    trigger('routerTransition', [
      state('void', style({ position: 'fixed' })),
      state('*', style({ position: 'fixed' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ],
  host: { '[@routerTransition]': '' },
  providers: [UserService, AnnouncementService, MessagesService]
})

export class UserDetailComponent implements OnInit {
  myMessageForm: FormGroup;
  user$: Observable<User>;
  announcement$: Observable<Announcement>
  userKey: string;
  adKey: string;
  public userUID: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
    private messagesService: MessagesService,
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService) { }

  onSent() {
    this.userUID = firebase.auth().currentUser.uid;
    this.myMessageForm.patchValue({fromuserid: this.userUID});
    this.myMessageForm.patchValue({answered: false});
    this.myMessageForm.patchValue({read: false});
    this.myMessageForm.patchValue({sent: new Date()});
    //console.log(this.myMessageForm.value);
    this.messagesService.createNewMessage(this.myMessageForm.value)
    .subscribe(
              () => {
                  this.alertService.success('Съобщението е изпратено', true);
              },
              err => alert(`error saving lesson ${err}`)
          );
  }

  ngOnInit() {
    this.userKey = this.route.snapshot.params['id'];
    this.adKey = this.route.snapshot.params['adId'];
    //console.log(this.userKey);
    //console.log(this.adKey);
    this.user$ = this.userService.getUserByKey(this.userKey);
    this.announcement$ = this.announcementService.findAnnouncementByKey(this.adKey);

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
}
