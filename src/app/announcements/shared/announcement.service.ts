import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';
import { Announcement } from './announcement.model';
import { Message } from '../../messages/shared/message.model';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { database } from 'firebase';
import { UserService } from '../../users/shared/users.service';

@Injectable()
export class AnnouncementService {
    sdkDb: any;

    constructor(
        private db: AngularFireDatabase,
        @Inject(FirebaseRef) fb,
        private http: Http,
        private userService: UserService
    ) {
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

    // private findMessagesKeysPerAnnouncementKey(announcementKey: string,
    //                            query: FirebaseListFactoryOpts = {}): Observable<string[]> {
    //     return this.findAnnouncementByKey(announcementKey)
    //         .do(val => console.log('announcement', val))
    //         .filter(announcement => !!announcement)
    //         .switchMap(announcement => this.db.list(`messagesPerAnnouncement/${announcement.$key}`, query))
    //         .map( mspa => mspa.map(mpc => mpc.$key) );
    // }
    // 

    //   private findMessagesForMessageKeys(messageKeys$: Observable<string[]>): Observable<Message[]> {
    //       return messageKeys$
    //           .map(mspa => mspa.map(messageKey => this.db.object('messages/' + messageKey)) )
    //           .flatMap(fbojs => Observable.combineLatest(fbojs) );
    //
    //   }

    private firebaseUpdate(dataToSave) {
        const subject = new Subject();

        this.sdkDb.update(dataToSave)
            .then(
            val => {
                subject.next(val);
                subject.complete();

            },
            err => {
                subject.error(err);
                subject.complete();
            }
            );

        return subject.asObservable();
    }

    createAnnouncement(announcement: Announcement): Observable<any> {
        // Set user, added on and active
        let firebase = require('firebase');
        let currentdate = new Date();
        let datetime = currentdate.getDate() + '/'
            + (currentdate.getMonth() + 1) + '/'
            + currentdate.getFullYear() + ' @ '
            + currentdate.getHours() + ':'
            + currentdate.getMinutes() + ':'
            + currentdate.getSeconds();

        let userUID = firebase.auth().currentUser.uid;
        return this.userService.getUserByKey(userUID)
            .map(user => user.name)
            .flatMap(username => {
                announcement.userid = userUID;
                announcement.username = username;
                announcement.added = datetime;
                announcement.active = true;

                return this.sdkDb
                    .child('announcements')
                    .push(announcement)
                    .key;
            })
            .map(newAnnouncementKey => {
                let dataToSave = {};
                dataToSave[`announcementsPerUser/${userUID}/${newAnnouncementKey}`] = true;
                return this.firebaseUpdate(dataToSave);
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

    changeAnnouncementStatus(announcementKey: string, active: boolean) {
        console.log(announcementKey);
        return new Promise((resolve, reject) => {
            this.findAnnouncementByKey(announcementKey)
                .subscribe(obj => {
                    console.log(obj);
                    obj.active = active;
                    delete (obj.$key);
                    console.log(obj);
                    let dataToSave = {};
                    dataToSave[`announcements/${announcementKey}`] = obj;

                    this.firebaseUpdate(dataToSave)
                        .subscribe(() => resolve(obj),
                        err => reject(err));
                });
        });
    }

    // findAllMessagesForAnnouncement(announcementKey: string): Observable<Message[]> {
    //     return this.findMessagesForMessageKeys(this.findMessagesKeysPerAnnouncementKey(announcementKey));
    // }
}
