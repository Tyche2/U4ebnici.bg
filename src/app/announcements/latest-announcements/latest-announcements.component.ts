import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AnnouncementService } from '../shared/announcement.service';
import { Announcement } from '../shared/announcement.model';


@Component({
  selector: 'app-latest-announcements',
  templateUrl: './latest-announcements.component.html',
  styleUrls: ['./latest-announcements.component.css']
})
export class LatestAnnouncementsComponent implements OnInit {
  announcements: Observable<Announcement[]>;
  searchText: string;
  searchClas: string;
  searchAuthor: string;

  constructor(
    private announcementService: AnnouncementService,
    private router: Router
  ) { }

  ngOnInit() {
    this.announcements = this.announcementService.findAllAnnouncements();
  }

  onInput(e: any) {
    if (e.target.name === 'title') {
      this.searchText = e.target.value;
    } else if (e.target.name === 'clas') {
      this.searchClas = e.target.value;
    } else if (e.target.name === 'author') {
      this.searchAuthor = e.target.value;
    }
  }

  findRecords() {
    let queryParams = {};

    if (this.searchText && this.searchText !== '') {
      queryParams['text'] = this.searchText;
    }

    if (this.searchClas && this.searchClas !== '') {
      queryParams['clas'] = this.searchClas;
    }

    if (this.searchAuthor && this.searchAuthor !== '') {
      queryParams['author'] = this.searchAuthor;
    }

    this.router.navigate(['/announcements', queryParams]);
  }
}
