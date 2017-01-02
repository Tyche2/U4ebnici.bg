import { NgModule } from '@angular/core';

import { GetUserPipe, SortPipe, ToBGNMoneyPipe, TopPipe, AnnouncementFilterByPipe } from './pipes';

@NgModule({
    declarations: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
        AnnouncementFilterByPipe
    ],
    exports: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe,
        AnnouncementFilterByPipe
    ]
})
export class SharedModule { }
