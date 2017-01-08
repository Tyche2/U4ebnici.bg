import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Announcement } from '../announcement.model';
import { ConstantService } from '../../../core/services/constant.service';
import { AuthService } from '../../../auth/shared/auth.service';
import { AnnouncementService } from '../../shared/announcement.service';
import { AlertService } from '../../../core/alert/alert.service';

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.css']
})

export class AnnouncementsListComponent implements OnInit {
  @Input() announcements: Observable<Announcement[]>;
  @Input() isFiltred: boolean;
  @Input() pageTitle: string;
  @Input() searchText: string;
  @Input() searchClas: string;
  @Input() searchAuthor: string;
  isActive: boolean;
  sortBy: string;
  sortByKey: string;
  sortByOptions: string[];
  order: string;
  sortByField: string;
  page: number;
  announcementType : string;
  announcementToUpdate: Announcement;

  constructor(private constantService: ConstantService,
            private authService: AuthService,
            private announcementService: AnnouncementService,
            private alertService: AlertService) { }

  ngOnInit() {
    this.sortByOptions = [this.constantService.LAST_ADDED, this.constantService.ALPHABETIC_ORDER,
    this.constantService.CLASS, this.constantService.PRICE];
    this.sortBy = this.constantService.LAST_ADDED;
    this.sortByField = '$key';
    this.sortByKey = '-$key';
    this.order = 'desc';
    this.announcementType = 'active';
    this.isActive = true;
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

  onAnnouncementsTypeChange(e: any) {  
    if (e.target.getAttribute('isActive') === 'true') {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    this.announcementType = e.target.getAttribute('data');
  }

  isAuth() {
    return this.authService.isAuthenticated;
  }

  get searchtext(): string { return this.searchText; }

  unactivateAnnouncement(announcementKey: string) {
    this.announcementService.findAnnouncementByKey(announcementKey)
      .subscribe(obj => {
        this.announcementToUpdate = Object.assign({}, obj);
        this.announcementToUpdate.active = false;
        //console.log(announcementToUpdate);
         })        
        this.announcementService.changeAnnouncementStatus(this.announcementToUpdate)
          .subscribe(
          () => {
            this.alertService.success('Обявата е архивирана успешно', true);
          },
          err => this.alertService.error(`Грешка при архивиране на обява ${err}`)
          );
        // this.announcementService.changeAnnouncementStatus(announcementKey, false)
        //   .then(() => {
        //     this.alertService.success('Обявата е архивирана успешно');
        //   })
        //   .catch((err) => {
        //     this.alertService.error(`Грешка при архивиране на обява ${err}`);
        //   });
      }
  

  activateAnnouncement(announcementKey: string) {
    this.announcementService.findAnnouncementByKey(announcementKey)
      .subscribe(obj => {
        this.announcementToUpdate = Object.assign({}, obj);
        this.announcementToUpdate.active = true;  
       // console.log(this.announcementToUpdate);  
      })
        this.announcementService.changeAnnouncementStatus(this.announcementToUpdate)
          .subscribe(
          () => {
            this.alertService.success('Обявата е активирана успешно', true);    
          },
          err => this.alertService.error(`Грешка при активиране на обява ${err}`)
          );
          
  }
}
