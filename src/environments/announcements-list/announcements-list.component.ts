import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement/announcement.service'
import { DataModel } from '../announcement/data-model'

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.css'],
  providers: [AnnouncementService],
})
export class AnnouncementsListComponent implements OnInit {
  private errorMessage: string;
  mode = 'Observable';
  private ads: DataModel[];

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.getAd()
  }
  getAd() {
    this.announcementService.getAnnouncements()
                     .subscribe(
                       ads => this.ads = ads,
                       error =>  this.errorMessage = <any>error);
  }
}
