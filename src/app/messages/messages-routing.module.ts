import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnouncementMessagesComponent } from './announcement-messages/announcement-messages.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';

const messagesRoutes: Routes = [
    {
        path: 'messages',
        children: [
            { path: 'user', component: UserMessagesComponent },
            { path: 'announcement/:id', component: AnnouncementMessagesComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(messagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MessagesRoutingModule { }