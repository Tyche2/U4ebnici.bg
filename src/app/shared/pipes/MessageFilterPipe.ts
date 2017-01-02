import { Pipe, PipeTransform } from '@angular/core';

import { Message } from '../../users/shared/message.model';

@Pipe({
    name: 'msgFilter'
})
export class MessageFilterPipe implements PipeTransform {
    transform(items: Message[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        return items.filter(it => it[field] === value);
    }
};