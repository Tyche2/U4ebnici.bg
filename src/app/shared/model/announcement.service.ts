import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Announcement } from './announcement';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';

@Injectable()
export class AnnouncementService {

    constructor(private db: AngularFireDatabase) {
    }

    findAllAnnouncements(): Observable<Announcement[]> {
        return this.db.list('announcements');
    }
}