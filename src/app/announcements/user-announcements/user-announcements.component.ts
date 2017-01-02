import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Announcement } from '../shared/announcement.model';
import { AnnouncementService } from '../shared/announcement.service';
import { ConstantService } from '../../core/constant.service';

@Component({
  selector: 'app-user-announcements',
  templateUrl: './user-announcements.component.html',
  styleUrls: ['./user-announcements.component.css'],
  providers: [AnnouncementService, ConstantService]
})
export class UserAnnouncementsComponent implements OnInit {
  announcements: Observable<Announcement[]>;
  sortBy: string;
  sortByKey: string;
  sortByOptions: string[];
  order: string;
  sortByField: string;
  isFiltred: boolean;

  constructor(
    private announcementService: AnnouncementService,
    private constantService: ConstantService
  ) { }

  ngOnInit() {
    this.announcements = this.announcementService.findAnnouncmentsByUserKey('wnsuJuKI0DNdXbVcPN9wYlMzmfZ2'); // TODO
    this.sortByOptions = [this.constantService.LAST_ADDED, this.constantService.ALPHABETIC_ORDER,
    this.constantService.CLASS, this.constantService.PRICE];
    this.sortBy = this.constantService.LAST_ADDED;
    this.sortByField = '$key';
    this.sortByKey = '-$key';
    this.order = 'desc';
    this.isFiltred = false;
  }

  onSortByChange(e: any) {
    this.sortBy = e.target.value;
    if (this.sortBy === this.constantService.LAST_ADDED) {
      this.sortByField = '$key';
    } else if (this.sortBy === this.constantService.ALPHABETIC_ORDER) {
      this.sortByField = 'title';
    } else if (this.sortBy === this.constantService.CLASS) {
      this.sortByField = 'clas';
    } else if (this.sortBy === this.constantService.PRICE) {
      this.sortByField = 'price';
    }

    this.sortByKey = this.sortByField;
    if (this.order === 'desc') {
      this.sortByKey = '-' + this.sortByField;
    }
  }

  onOrderChange(e: any) {
    this.order = e.target.value;
    this.sortByKey = this.sortByField;
    if (this.order === 'desc') {
      this.sortByKey = '-' + this.sortByField;
    }
  }

}
