import { Message } from './message';
import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';
import { Http } from "@angular/http";
import { firebaseConfig } from '../../environments/firebase.config';

@Injectable()
export class MessagesService {

sdkDb: any;
    constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb,
        private http: Http) {
        this.sdkDb = fb.database().ref();
    }
 
createNewMessage(msg: any): Observable<any> {
        const msgToSave = Object.assign({}, msg);
        const newMsgKey = this.sdkDb.child('messages').push().key;

        let dataToSave = {};

        dataToSave["messages/" + newMsgKey] = msgToSave;

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
