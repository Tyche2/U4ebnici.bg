import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Announcement } from '../shared/announcement.model';
import { AnnouncementService } from '../shared/announcement.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})

export class AnnouncementDetailComponent implements OnInit {
  announcement$: Observable<Announcement>;
  announcementKey: string;

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.announcementKey = this.route.snapshot.params['id'];
    this.announcement$ = this.announcementService.findAnnouncementByKey(this.announcementKey);
    this.localStorageService.addItemToCollection('reviewed-announcements', this.announcementKey);
  }
}
