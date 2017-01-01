import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Announcement } from './announcement';
import { Message } from './message';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { database } from 'firebase';

@Injectable()
export class AnnouncementService {
    sdkDb: any;

    constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb,
        private http: Http) {
        this.sdkDb = fb.database().ref();
    }

    private findAnnouncmentsKeysByUserKey(userKey: string): Observable<string[]> {
        return this.db.list(`announcementsPerUser/${userKey}`)
            .map(keys => keys.map(keyObj => keyObj.$key));
    }

    private findAnnouncmentsByKeys(announcementsKeys$: Observable<string[]>): Observable<Announcement[]> {
        return announcementsKeys$
            .map(keys => keys.map(key => this.findAnnouncementByKey(key)))
            .flatMap(fbojs => Observable.combineLatest(fbojs));
    }

    private findMessagesKeysPerAnnouncementKey(announcementKey: string,
                               query: FirebaseListFactoryOpts = {}): Observable<string[]> {
        return this.findAnnouncementByKey(announcementKey)
            .do(val => console.log('announcement', val))
            .filter(announcement => !!announcement)
            .switchMap(announcement => this.db.list(`messagesPerAnnouncement/${announcement.$key}`, query))
            .map( mspa => mspa.map(mpc => mpc.$key) );
    }


    private findMessagesForMessageKeys(messageKeys$: Observable<string[]>): Observable<Message[]> {
        return messageKeys$
            .map(mspa => mspa.map(messageKey => this.db.object('messages/' + messageKey)) )
            .flatMap(fbojs => Observable.combineLatest(fbojs) );

    }

    createAnnouncement(announcement: Announcement) {
        // Set user, added on and active
        let firebase = require('firebase');
        let currentdate = new Date();
        let datetime = currentdate.getDate() + '/'
                + (currentdate.getMonth() + 1) + '/'
                + currentdate.getFullYear() + ' @ '
                + currentdate.getHours() + ':'
                + currentdate.getMinutes() + ':'
                + currentdate.getSeconds();

        announcement.userid = firebase.auth().currentUser.uid;
        announcement.added = datetime;
        announcement.active = true;

        return new Promise((resolve, reject) => {
            let newRef = this.sdkDb
                .child('announcements')
                .push(announcement);
            if (newRef) {
                resolve(newRef);
            } else {
                reject('Announcement is not added');
            }
        });
    }

    findAllAnnouncements(): Observable<Announcement[]> {

        return this.db.list('announcements')
            .map(Announcement.fromJsonArray);
    }

    findAnnouncementByKey(announcementKey: string): Observable<Announcement> {
        return this.db.object(`announcements/${announcementKey}`).map(Announcement.fromJson);
    }

    findAnnouncmentsByUserKey(userKey: string): Observable<Announcement[]> {
        return this.findAnnouncmentsByKeys(this.findAnnouncmentsKeysByUserKey(userKey));
    }

    findAllMessagesForAnnouncement(announcementKey: string): Observable<Message[]> {
        return this.findMessagesForMessageKeys(this.findMessagesKeysPerAnnouncementKey(announcementKey));
    }
}
