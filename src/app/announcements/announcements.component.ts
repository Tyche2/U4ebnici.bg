import {
  Component,
  OnInit,
  Output
} from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { AnnouncementService } from './shared/announcement.service';
import { Announcement } from './shared/announcement.model';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})

export class AnnouncementsComponent implements OnInit {
  announcements: Observable<Announcement[]>;
  isFiltered: boolean;
  @Output() searchText: string;
  @Output() searchClas: string;
  @Output() searchAuthor: string;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.isFiltered = false;
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
    console.log(this.searchText);
  }

  findRecords() {
    this.isFiltered = true;
  }
}
