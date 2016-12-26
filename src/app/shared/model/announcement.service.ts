import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Announcement } from './announcement';
import { Message } from './message';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class AnnouncementService {

    constructor(private db: AngularFireDatabase) {
    }

    findAllAnnouncements(): Observable<Announcement[]> {

        return this.db.list('announcements')
            .map(Announcement.fromJsonArray);
    }

    findAnnouncementByKey(announcementKey: string): Observable<Announcement> {
        return this.db.object(`announcements/${announcementKey}`).map(Announcement.fromJson);
    }

    findMessagesKeysPerAnnouncementKey(announcementKey: string,
                               query: FirebaseListFactoryOpts = {}): Observable<string[]> {
        return this.findAnnouncementByKey(announcementKey)
            .do(val => console.log('announcement', val))
            .filter(announcement => !!announcement)
            .switchMap(announcement => this.db.list(`messagesPerAnnouncement/${announcement.$key}`, query))
            .map( mspa => mspa.map(mpc => mpc.$key) );
    }


    findMessagesForMessageKeys(messageKeys$: Observable<string[]>): Observable<Message[]> {
        return messageKeys$
            .map(mspa => mspa.map(messageKey => this.db.object('messages/' + messageKey)) )
            .flatMap(fbojs => Observable.combineLatest(fbojs) );

    }

    findAllMessagesForAnnouncement(announcementKey: string): Observable<Message[]> {
        return this.findMessagesForMessageKeys(this.findMessagesKeysPerAnnouncementKey(announcementKey));
    }
}
