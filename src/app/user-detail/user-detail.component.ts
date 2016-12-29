import { UserService } from './../shared/model/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/model/user';
import { Observable } from 'rxjs/Rx';           

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
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
    //console.log(this.userKey);
    this.user$ = this.userService.getUserByKey(this.userKey);
  }
}
