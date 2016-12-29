import { Injectable, Inject} from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';
import { User } from './user';
import {Http} from "@angular/http";
import {firebaseConfig} from '../../environments/firebase.config';

@Injectable()
export class UserService {
   sdkDb:any;
   constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb,
               private http:Http) {
                   this.sdkDb = fb.database().ref();
   }

 createNewUser(user:any): Observable<any> {
       const userToSave = Object.assign({}, user);
       const newUserKey = this.sdkDb.child('users').push().key;

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

    getUserByKey(userKey: string): Observable<User> {
        return this.db.object(`users/${userKey}`).map(User.fromJson);
    }
    
    getUserByUID(uid:string): Observable<User[]> {
    //   console.log(uid);
    //   function isEqualTo(obj) {
    //       return (obj.uid).toString == uid;
    //   }
//
    //    return this.db.list('users')
    //    .map(User.fromJsonList)
    //    .filter(isEqualTo)
    //    .switchMap(user => this.db.object(`users/${user.$key}/${uid}`));
    }
}
