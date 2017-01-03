import { Announcement } from '../../announcements/shared/announcement.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'showActive'
})
export class AnnouncementFilterByStatusPipe implements PipeTransform {
    transform(announcements: Announcement[], isActive: boolean): any[] {
        if (announcements) {
            if (isActive === undefined) {
                return announcements;
            }
            if (isActive) {
                return announcements.filter(ad => ad.active);
            } else {
                return announcements.filter(ad => !ad.active);
            }
        }
    }
};
