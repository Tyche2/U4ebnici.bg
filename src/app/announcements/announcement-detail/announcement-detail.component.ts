import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AnnouncementService } from '../shared/announcement.service';
import { Announcement } from '../shared/announcement.model';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})

export class AnnouncementDetailComponent implements OnInit {

  announcement$: Observable<Announcement>;
  announcementKey: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.announcementKey = this.route.snapshot.params['id'];
    console.log(this.announcementKey);
    this.announcement$ = this.announcementService.findAnnouncementByKey(this.announcementKey);
  }
}
