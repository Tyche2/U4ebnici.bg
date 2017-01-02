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

@NgModule({
    declarations: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe,
        AnnouncementFilterByStatusPipe
    ],
    exports: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe,
        AnnouncementFilterByStatusPipe
    ]
})
export class SharedModule { }
