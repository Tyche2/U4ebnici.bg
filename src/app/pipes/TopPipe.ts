import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'top'
})
export class TopPipe implements PipeTransform {
    transform(items: any[], top?: number) {
        if (items) {
            if (top && top > 0) {
                return items.slice(0, top);
            } else {
                return items.slice(0, 12);
            }
        }
    }
};
