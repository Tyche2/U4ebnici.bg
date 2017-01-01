import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { AnnouncementService } from './shared/announcement.service';
import { FoundannouncementsListComponent } from './found-announcements/found-announcements.component';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { SharedModule } from '../shared/shared.module';
import { UserAnnouncementsComponent } from './user-announcements/user-announcements.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    AnnouncementsComponent,
    AnnouncementDetailComponent,
    AnnouncementsListComponent,
    FoundannouncementsListComponent,
    NewAnnouncementComponent,
    UserAnnouncementsComponent
  ],
  exports: [
    AnnouncementsComponent,
    AnnouncementDetailComponent,
    AnnouncementsListComponent,
    FoundannouncementsListComponent,
    NewAnnouncementComponent,
    UserAnnouncementsComponent
  ],
  providers: [AnnouncementService]
})
export class AnnouncementsModule { }
