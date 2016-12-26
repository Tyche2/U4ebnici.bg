import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement/announcement.service'
import { Notice } from '../shared/model/notice-model'

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.css'],
  providers: [AnnouncementService],
})
export class AnnouncementsListComponent implements OnInit {
  notices: Notice[];
  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.announcementService.findAllNotices()
    .subscribe(notices => this.notices = notices);
    
  }
  
}
