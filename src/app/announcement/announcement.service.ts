import * as Rx from 'rxjs/rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Notice } from './../shared/model/notice-model';
import {Injectable, Inject} from '@angular/core';
import {AngularFireDatabase, FirebaseRef} from "angularfire2";
import {Http} from "@angular/http";
import {firebaseConfig} from "../environments/firebase.config";


@Injectable()
export class AnnouncementService {

    sdkDb:any;

    constructor(private db:AngularFireDatabase, @Inject(FirebaseRef) fb,
                private http:Http) {

        this.sdkDb = fb.database().ref();
    }

    findAllNotices():Observable<Notice[]> {
        return this.db.list('notices');  
    }   

    

}
