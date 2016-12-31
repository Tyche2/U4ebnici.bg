import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Announcement } from '../shared/model/announcement';
import { Observable } from 'rxjs/Rx';
import { ConstantService } from '../shared/constant.service';

@Component({
  selector: 'app-foundannouncements-list',
  templateUrl: './foundannouncements-list.component.html',
  styleUrls: ['./foundannouncements-list.component.css'],
  providers: [ConstantService]
})

export class FoundannouncementsListComponent implements OnInit {
  @Input() announcements: Observable<Announcement[]>;
  @Input() searchText: string;
  @Input() searchClas: string;
  @Input() searchAuthor: string;
  sortBy: string;
  sortByKey: string;
  sortByOptions: string[];
  order: string;
  sortByField: string;

  constructor(private constantService: ConstantService) {
  }

  ngOnInit() {
    this.sortByOptions = [this.constantService.LAST_ADDED, this.constantService.ALPHABETIC_ORDER,
                    this.constantService.CLASS, this.constantService.PRICE];
    this.sortBy = this.constantService.LAST_ADDED;
    this.sortByField = '$key';
    this.sortByKey = '-$key';
    this.order = 'desc';
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
