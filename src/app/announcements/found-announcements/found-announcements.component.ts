import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Announcement } from '../shared/announcement.model';
import { AnnouncementService } from '../shared/announcement.service';

@Component({
  selector: 'app-foundannouncements-list',
  templateUrl: './found-announcements.component.html',
  styleUrls: ['./found-announcements.component.css']
})

export class FoundAnnouncementsListComponent implements OnInit {
  announcements$: Observable<Announcement[]>;
  searchText: string;
  searchClas: string;
  searchAuthor: string;
  isFiltred: boolean;

  constructor(
    private announcementService: AnnouncementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isFiltred = true;
    this.route.params
      .subscribe((params: Params) => {
        this.searchText = params['text'] || '';
        this.searchClas = params['clas'] || '';
        this.searchAuthor = params['author'] || '';
      });

    this.announcements$ = this.announcementService.findActiveAnnouncements();
  }
}
