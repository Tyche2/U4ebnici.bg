import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { AnnouncementsListComponent } from './shared/announcements-list/announcements-list.component';
import { FoundAnnouncementsListComponent } from './found-announcements/found-announcements.component';
import { LatestAnnouncementsComponent } from './latest-announcements/latest-announcements.component';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { UserAnnouncementsComponent } from './user-announcements/user-announcements.component';

const announcementsRoutes: Routes = [
    { path: 'home', component: LatestAnnouncementsComponent },
    { path: 'announcements', component: FoundAnnouncementsListComponent }, // TODO (query)
    { path: 'user-announcements', component: UserAnnouncementsComponent },
    {
        path: 'announcement',
        children: [
            { path: 'edit/:id', component: EditAnnouncementComponent },
            { path: 'new', component: NewAnnouncementComponent },
            { path: ':id', component: AnnouncementDetailComponent }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(announcementsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AnnouncementsRoutingModule { }
