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
import { ImageBorderDirective, MarkReviewedAnnouncementDirective } from './directives';

@NgModule({
    declarations: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
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
        TopPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe,
        AnnouncementFilterByStatusPipe,
        MarkReviewedAnnouncementDirective,
        ImageBorderDirective
    ]
})
export class SharedModule { }
