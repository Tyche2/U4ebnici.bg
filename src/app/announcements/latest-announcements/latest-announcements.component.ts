import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AnnouncementService } from '../shared/announcement.service';
import { Announcement } from '../shared/announcement.model';


@Component({
  selector: 'app-latest-announcements',
  templateUrl: './latest-announcements.component.html',
  styleUrls: ['./latest-announcements.component.css']
})
export class LatestAnnouncementsComponent implements OnInit {
  announcements$: Observable<Announcement[]>;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.announcements$ = this.announcementService.findLastestAnnouncements();
  }
}
