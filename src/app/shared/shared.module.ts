import { NgModule } from '@angular/core';

import {
    GetUserPipe,
    SortPipe,
    ToBGNMoneyPipe,
    AnnouncementFilterByPipe,
    MessageFilterPipe,
    AnnouncementFilterByStatusPipe
} from './pipes';
import { ImageBorderDirective, MarkReviewedAnnouncementDirective } from './directives';

@NgModule({
    declarations: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe,
        AnnouncementFilterByStatusPipe,
        ImageBorderDirective,
        MarkReviewedAnnouncementDirective
    ],
    exports: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe,
        AnnouncementFilterByStatusPipe,
        MarkReviewedAnnouncementDirective,
        ImageBorderDirective
    ]
})
export class SharedModule { }
