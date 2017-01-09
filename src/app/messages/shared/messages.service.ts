import { AngularFireDatabase, FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { Message } from './message.model';
import { DataService } from '../../core/services/data.service';

@Injectable()
export class MessagesService {

    constructor(private db: DataService) { }

    private findMessagesByKeys(messagesKeys$: Observable<string[]>): Observable<Message[]> {
        return messagesKeys$
            .map(keys => keys.map(key => this.findMessageByKey(key)))
            .flatMap(fbojs => Observable.combineLatest(fbojs));
    }

    private findMessagesKeysByUserKey(userKey: string): Observable<string[]> {
        return this.db.getCollection(`messagesPerUser/${userKey}`)
            .map(keys => keys.map(keyObj => keyObj.$key));
    }

    private findMessagesKeysByAnnouncementKey(announcementKey: string): Observable<string[]> {
        return this.db.getCollection(`messagesPerAnnouncement/${announcementKey}`)
            .map(keys => keys.map(keyObj => keyObj.$key));
    }

    createNewMessage(msg: Message): firebase.Thenable<any> {
        let newMsgKey;
        return this.db.addItemToCollection('messages', msg)
            .then(dbMsg => newMsgKey = dbMsg.key)
            .then(() => {
                let msgPerAnn = {};
                msgPerAnn[`${newMsgKey}`] = true;
                this.db.updateItemFromCollection(`messagesPerAnnouncement`, msg.announcementid, msgPerAnn);
            })
            .then(() => {
                let msgPerUser = {};
                msgPerUser[`${newMsgKey}`] = 'sent';
                this.db.updateItemFromCollection(`messagesPerUser`, msg.fromuserid, msgPerUser);
            })
            .then(() => {
                let msgPerUser = {};
                msgPerUser[`${newMsgKey}`] = 'received';
                this.db.updateItemFromCollection('messagesPerUser', msg.touserid, msgPerUser);
            });
    }

    createNewContactMessage(msg: any): firebase.database.ThenableReference {
        return this.db.addItemToCollection('contactmessages', msg);
    }

    findMessagesByAnnouncementKey(announcementKey: string): Observable<Message[]> {
        return this.findMessagesByKeys(this.findMessagesKeysByAnnouncementKey(announcementKey));
    }

    findMessageByKey(messageKey: string): Observable<Message> {
        return this.db.getItem(`messages/${messageKey}`)
            .map(Message.fromJson);
    }

    findMessagesByUserKey(userKey: string): Observable<Message[]> {
        return this.findMessagesByKeys(this.findMessagesKeysByUserKey(userKey));
    }
}
