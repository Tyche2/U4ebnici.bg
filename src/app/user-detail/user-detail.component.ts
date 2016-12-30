import {Announcement } from './../shared/model/announcement';
import { AnnouncementService } from './../shared/model/announcement.service';
import { UserService } from './../shared/model/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/model/user';
import { Observable } from 'rxjs/Rx';           
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
animations: [
   trigger('routerTransition', [
   state('void', style({position:'fixed'}) ),
   state('*', style({position:'fixed'}) ),
   transition(':enter', [
     style({transform: 'translateX(100%)'}),
     animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
   ]),
   transition(':leave', [
     style({transform: 'translateX(0%)'}),
     animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
   ])
 ])
 ],
host: {'[@routerTransition]': ''},
  providers: [UserService, AnnouncementService]
})
export class UserDetailComponent implements OnInit {

  user$: Observable<User>;
  announcement$: Observable<Announcement>
  userKey: string;
  adKey: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
    private userService: UserService) { }

  ngOnInit() {
    this.userKey = this.route.snapshot.params['id'];
    this.adKey = this.route.snapshot.params['adId'];
    console.log(this.userKey);
    console.log(this.adKey);
    this.user$ = this.userService.getUserByKey(this.userKey);
    this.announcement$ = this.announcementService.findAnnouncementByKey(this.adKey);
    
  }
}
