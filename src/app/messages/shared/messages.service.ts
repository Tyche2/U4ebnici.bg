import { AngularFireDatabase, FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { firebaseConfig } from '../../environments/firebase.config';
import { Message } from './message.model';

@Injectable()
export class MessagesService {
    sdkDb: any;
    constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb,
        private http: Http) {
        this.sdkDb = fb.database().ref();
    }

    createNewMessage(msg: Message): Observable<any> {
        const newMsgKey = this.sdkDb.child('messages').push(msg).key;
        let dataToSave = {};
        dataToSave[`messagesPerAnnouncement/${msg.announcementid}/${newMsgKey}`] = true;
        dataToSave[`messagesPerUser/${msg.fromuserid}/${newMsgKey}`] = 'sent';
        dataToSave[`messagesPerUser/${msg.touserid}/${newMsgKey}`] = 'received';

        return this.firebaseUpdate(dataToSave);
    }
    createNewContactmessage(msg: any): Observable<any> {
        const subject = new Subject();
        this.sdkDb.child('contactmessages').push(msg)
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

    firebaseUpdate(dataToSave) {
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

    findMessageByKey(messageKey: string): Observable<Message> {
        return this.db.object(`messages/${messageKey}`).map(Message.fromJson);
    }

    private findMessagesKeysByUserKey(userKey: string): Observable<string[]> {
        return this.db.list(`messagesPerUser/${userKey}`)
            .map(keys => keys.map(keyObj => keyObj.$key));
    }

    private findMessagesKeysByAnnouncementKey(announcementKey: string): Observable<string[]> {
        return this.db.list(`messagesPerAnnouncement/${announcementKey}`)
            .map(keys => keys.map(keyObj => keyObj.$key));
    }

    private findMessagesByKeys(messagesKeys$: Observable<string[]>): Observable<Message[]> {
        return messagesKeys$
            .map(keys => keys.map(key => this.findMessageByKey(key)))
            .flatMap(fbojs => Observable.combineLatest(fbojs));
    }

    findMessagesByUserKey(userKey: string): Observable<Message[]> {
        return this.findMessagesByKeys(this.findMessagesKeysByUserKey(userKey));
    }

    findMessagesByAnnouncementKey(announcementKey: string): Observable<Message[]> {
        return this.findMessagesByKeys(this.findMessagesKeysByAnnouncementKey(announcementKey));
    }
}
