import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Announcement } from '../shared/announcement.model';
import { ConstantService } from '../../core/constant.service';

@Component({
  selector: 'app-foundannouncements-list',
  templateUrl: './found-announcements.component.html',
  styleUrls: ['./found-announcements.component.css']
})

export class FoundannouncementsListComponent implements OnInit {
  @Input() announcements: Observable<Announcement[]>;
  @Input() searchText: string = 'Book';
  @Input() searchClas: string;
  @Input() searchAuthor: string;
  sortBy: string;
  sortByKey: string;
  sortByOptions: string[];
  order: string;
  sortByField: string;
  isFiltred: boolean;

  constructor(private constantService: ConstantService) {
  }

  ngOnInit() {
    this.sortByOptions = [this.constantService.LAST_ADDED, this.constantService.ALPHABETIC_ORDER,
                    this.constantService.CLASS, this.constantService.PRICE];
    this.sortBy = this.constantService.LAST_ADDED;
    this.sortByField = '$key';
    this.sortByKey = '-$key';
    this.order = 'desc';
    this.isFiltred = true;
    console.log(this.searchText);
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

  get searchtext(): string { return this.searchText; }
}
