import { Announcement } from '../../announcements/shared/announcement.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'showActive'
})
export class AnnouncementFilterByStatusPipe implements PipeTransform {
    transform(announcements: Announcement[], isActive: boolean): any[] {
        console.log(isActive);
        if (announcements) {
            if (isActive === undefined) {
                return announcements;
            }
            console.log(isActive);
            if (isActive) {
                return announcements.filter(ad => ad.active);
            } else {
                return announcements.filter(ad => !ad.active);
            }
        }
    }
};
