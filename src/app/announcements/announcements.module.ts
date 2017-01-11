import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AnnouncementService } from './shared/announcement.service';
import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { AnnouncementsListComponent } from './shared/announcements-list/announcements-list.component';
import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { FoundAnnouncementsListComponent } from './found-announcements/found-announcements.component';
import { LatestAnnouncementsComponent } from './latest-announcements/latest-announcements.component';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { SharedModule } from '../shared/shared.module';
import { SearchAnnouncementsComponent } from './shared/search-announcements/search-announcements.component';
import { UserAnnouncementsComponent } from './user-announcements/user-announcements.component';

@NgModule({
  imports: [
    AnnouncementsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    Ng2PaginationModule
  ],
  declarations: [
    AnnouncementsComponent,
    AnnouncementDetailComponent,
    AnnouncementsListComponent,
    FoundAnnouncementsListComponent,
    LatestAnnouncementsComponent,
    NewAnnouncementComponent,
    EditAnnouncementComponent,
    UserAnnouncementsComponent,
    SearchAnnouncementsComponent
  ],
  providers: [AnnouncementService]
})
export class AnnouncementsModule { }
