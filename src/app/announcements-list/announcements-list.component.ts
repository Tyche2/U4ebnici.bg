import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../shared/model/announcement.service';
import { Announcement } from '../shared/model/announcement';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.css'],
  providers: [AnnouncementService],
})

export class AnnouncementsListComponent implements OnInit {

  announcements$: Observable<Announcement[]>;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.announcements$ = this.announcementService.findAllAnnouncements();
  }

}
