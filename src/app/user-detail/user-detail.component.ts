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
    state('void', style({position:'fixed', width:'70%'}) ),
    state('*', style({position:'fixed', width:'70%'}) ),
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
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {

  user$: Observable<User>;
  userKey: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.userKey = this.route.snapshot.params['id'];
    console.log(this.userKey);
   
    this.user$ = this.userService.getUserByKey(this.userKey);
    
    
  }
}
