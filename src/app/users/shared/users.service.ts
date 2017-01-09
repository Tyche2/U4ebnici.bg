import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DataService } from '../../core/services/data.service';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(private db: DataService) { }

    createNewUser(user: any): firebase.Thenable<any> {
        const userToSave = Object.assign({}, user);
        const newUserKey = user.uid;

        return this.db.updateItemFromCollection('users', newUserKey, userToSave);
    }

    updateUser(uid: string, user): firebase.Thenable<any> {
        const newUserKey = user.uid;
        const userToUpdate = Object.assign({}, user);
        delete (userToUpdate.$key);

        return this.db.updateItemFromCollection('users', newUserKey, userToUpdate);
    }

    getUserByKey(userKey: string): Observable<User> {
        return this.db.getItem(`users/${userKey}`)
            .map(User.fromJson);
    }
}
