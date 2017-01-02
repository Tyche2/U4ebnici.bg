import { NgModule } from '@angular/core';

import { GetUserPipe, SortPipe, ToBGNMoneyPipe, TopPipe, AnnouncementFilterByPipe, MessageFilterPipe } from './pipes';

@NgModule({
    declarations: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe
    ],
    exports: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
        AnnouncementFilterByPipe,
        MessageFilterPipe
    ]
})
export class SharedModule { }
