import { NgModule } from '@angular/core';

import { GetUserPipe, SortPipe, ToBGNMoneyPipe, TopPipe } from './pipes';

@NgModule({
    imports: [],
    declarations: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe
    ],
    exports: [
        GetUserPipe,
        SortPipe,
        ToBGNMoneyPipe,
        TopPipe
    ]
})
export class SharedModule { }
