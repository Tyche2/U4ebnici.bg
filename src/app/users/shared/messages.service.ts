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
//        const msgToSave = Object.assign({}, msg);
        const newMsgKey = this.sdkDb.child('messages').push(msg).key;

        let dataToSave = {};
//        dataToSave['messages/' + newMsgKey] = msgToSave;
        dataToSave[`messagesPerAnnouncement/${msg.announcementid}/${newMsgKey}`] = true;
        dataToSave[`messagesPerUser/${msg.fromuserid}/${newMsgKey}`] = 'sent';
        dataToSave[`messagesPerUser/${msg.touserid}/${newMsgKey}`] = 'received';

        return this.firebaseUpdate(dataToSave);
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
}
