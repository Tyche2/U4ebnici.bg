import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';
import { User } from './user';
import { Http } from "@angular/http";
import { firebaseConfig } from '../../environments/firebase.config';

@Injectable()
export class UserService {
    sdkDb: any;
    constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb,
        private http: Http) {
        this.sdkDb = fb.database().ref();
    }

    createNewUser(user: any): Observable<any> {
        const userToSave = Object.assign({}, user);
        const newUserKey = user.uid;//this.sdkDb.child('users').push().key;

        let dataToSave = {};

        dataToSave["users/" + newUserKey] = userToSave;

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
    updateUser(uid:string, user): Observable<any> {
        const newUserKey = user.uid;
        const userToUpdate = Object.assign({}, user);
        delete(userToUpdate.$key);

        let dataToSave = {};
        dataToSave["users/" + newUserKey] = userToUpdate;

        return this.firebaseUpdate(dataToSave);
    }

    deleteUser(uid:string): Observable<any> {
        const url = firebaseConfig.databaseURL + '/users/' + uid + '.json';

        return this.http.delete(url);
    }


    getUserByKey(userKey: string): Observable<User> {
        return this.db.object(`users/${userKey}`).map(User.fromJson);
    }

}
