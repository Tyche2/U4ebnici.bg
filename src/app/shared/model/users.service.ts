import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(private db: AngularFireDatabase) {
    }

    getUserByKey(key: string): Observable<any> {
        return this.db.object(`users/${key}`).map(User.fromJson);
    }
}
