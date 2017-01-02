import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Announcement } from '../shared/announcement.model';
import { AnnouncementService } from '../shared/announcement.service';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-user-announcements',
  templateUrl: './user-announcements.component.html',
  styleUrls: ['./user-announcements.component.css']
})
export class UserAnnouncementsComponent implements OnInit {
  announcements: Observable<Announcement[]>;
  isFiltred: boolean;

  constructor(
    private announcementService: AnnouncementService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.isFiltred = false;
    let userUID = this.authService.id;
    this.announcements = this.announcementService.findAnnouncmentsByUserKey(userUID);
  }
}
