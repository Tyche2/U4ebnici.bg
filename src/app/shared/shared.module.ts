import { NgModule } from '@angular/core';

import {
    GetUserPipe,
    SortPipe,
    ToBGNMoneyPipe,
    TopPipe,
    AnnouncementFilterByPipe,
    MessageFilterPipe,
    AnnouncementFilterByStatusPipe
} from './pipes';
import { MarkReviewedAnnouncementDirective } from './directives/mark-reviewed-announcement.directive';

@NgModule({
    declarations: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe,
        AnnouncementFilterByStatusPipe,
        MarkReviewedAnnouncementDirective
    ],
    exports: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe,
        AnnouncementFilterByStatusPipe,
        MarkReviewedAnnouncementDirective
    ]
})
export class SharedModule { }
