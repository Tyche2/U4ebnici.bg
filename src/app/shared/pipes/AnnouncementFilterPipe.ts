import { Announcement } from '../model/announcement';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy'
})
export class AnnouncementFilterByPipe implements PipeTransform {
    transform(announcements: Announcement[], filterByTitle: string,
            filterByClas: string, filterByAuthor: string): any[] {
        if (announcements) {
            if (!filterByTitle && !filterByClas && !filterByAuthor) {
                return announcements;
            }
            filterByTitle = filterByTitle || '';
            filterByClas = filterByClas || '';
            filterByAuthor = filterByAuthor || '';
            console.log(filterByTitle);
            console.log(filterByClas);
            console.log(filterByAuthor);

            console.log(announcements);


            return announcements.filter(ad => (ad.title.toLowerCase().indexOf(filterByTitle.toLowerCase()) >= 0
            || ad.discipline.toLowerCase().indexOf(filterByTitle.toLowerCase()) >= 0)
                && (filterByClas === '' || ad.clas === +filterByClas)
            && ad.authors.toLowerCase().indexOf(filterByAuthor.toLowerCase()) >= 0);
        }
    }
};