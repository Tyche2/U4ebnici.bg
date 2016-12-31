import {
  Component,
  OnInit,
  Output
} from '@angular/core';
import { AnnouncementService } from '../shared/model/announcement.service';
import { Announcement } from '../shared/model/announcement';
import { Observable } from 'rxjs/Rx';
import { ConstantService } from  '../shared/constant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    AnnouncementService,
    ConstantService
  ]
})

export class HomeComponent implements OnInit {
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
