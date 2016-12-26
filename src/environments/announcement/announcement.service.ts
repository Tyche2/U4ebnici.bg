import { Injectable } from '@angular/core'
import {  Headers, Http, Response } from '@angular/http';
import { DataModel } from '../announcement/data-model';
import {Observable} from 'rxjs/Rx';


@Injectable()

export class AnnouncementService {
    private dataUrl = 'app/data/data.json';
    constructor (private http: Http) {}

    getAnnouncements() : Observable<DataModel[]> {
        return this.http.get(this.dataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
        
}
