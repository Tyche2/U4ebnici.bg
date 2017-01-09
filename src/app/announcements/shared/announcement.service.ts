import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Announcement } from './announcement.model';
import { AuthService } from '../../auth/shared/auth.service';
import { DataService } from '../../core/services/data.service';
import { Message } from '../../messages/shared/message.model';
import { UserService } from '../../users/shared/users.service';

@Injectable()
export class AnnouncementService {
    sdkDb: any;

    constructor(
        private authService: AuthService,
        private db: DataService,
        private userService: UserService
    ) { }

    private findAnnouncmentsByKeys(announcementsKeys$: Observable<string[]>): Observable<Announcement[]> {
        return announcementsKeys$
            .map(keys => keys.map(key => this.findAnnouncementByKey(key)))
            .flatMap(fbojs => Observable.combineLatest(fbojs));
    }

    private findAnnouncmentsKeysByUserKey(userKey: string): Observable<string[]> {
        return this.db.getCollection(`announcementsPerUser/${userKey}`)
            .map(keys => keys.map(keyObj => keyObj.$key));
    }

    private saveAnnouncement(announcement: Announcement) {
        let userUID = this.authService.userId;
        let currentdate = new Date().toString();

        return this.userService.getUserByKey(userUID)
            .first()
            .map(user => user.name)
            .map(username => {
                announcement.userid = userUID;
                announcement.username = username;
                announcement.added = currentdate;
                announcement.active = true;
            })
            .map(() => this.db.addItemToCollection('announcements', announcement))
            .map(newAnnouncement => {
                let newAnnouncementKey = newAnnouncement.key;
                let annPerUser = {};
                annPerUser[`${newAnnouncementKey}`] = true;

                this.db.updateItemFromCollection('announcementsPerUser', userUID, annPerUser);
            })
            .toPromise();
    }

    private saveAnnouncementImage(image) {
        return this.db.saveStorageItem(image.name, image)
            .then(dbImage => dbImage.downloadURL);
    }

    createAnnouncement(announcement: Announcement, image: any): firebase.Promise<void> {
        if (image) {
            return this.saveAnnouncementImage(image)
                .then(imageURL => announcement.image = imageURL)
                .then(() => this.saveAnnouncement(announcement));
        } else {
            return this.saveAnnouncement(announcement);
        }
    }

    updateAnnouncement(announcement: any, newData: any, newImage?: Object) {
        if (newImage) {
            return this.saveAnnouncementImage(newImage)
                .then(imageURL => newData['image'] = imageURL)
                .then(() => this.db.updateItem(announcement, newData));
        } else {
            delete newData.image;
            return this.db.updateItem(announcement, newData);
        }
    };

    findAnnouncementByKey(announcementKey: string): Observable<Announcement> {
        return this.db.getItem(`announcements/${announcementKey}`)
            .map(Announcement.fromJson);
    }

    findAllAnnouncements(): Observable<Announcement[]> {
        return this.db.getCollection('announcements')
            .map(Announcement.fromJsonArray);
    }

    findActiveAnnouncements() {
        let query = {
            orderByChild: 'active',
            equalTo: true
        };
        return this.db.getCollection('announcements', { query })
            .map(Announcement.fromJsonArray);
    }

    findLastestAnnouncements(count = 12) {
        let query = {
            limitToLast: count,
            orderByChild: 'active',
            equalTo: true,
        };
        return this.db.getCollection('announcements', { query })
            .map(Announcement.fromJsonArray);
    }

    findAnnouncmentsByUserKey(userKey: string): Observable<Announcement[]> {
        return this.findAnnouncmentsByKeys(this.findAnnouncmentsKeysByUserKey(userKey));
    }

    activateAnnouncement(announcementKey: string): firebase.Promise<void> {
        return this.db.updateItem(`announcements/${announcementKey}`, { active: true });
    }

    unactivateAnnouncement(announcementKey: string): firebase.Promise<void> {
        return this.db.updateItem(`announcements/${announcementKey}`, { active: false });
    }
}
