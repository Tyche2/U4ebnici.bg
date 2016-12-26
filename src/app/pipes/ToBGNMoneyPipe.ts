import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toBGNMoney'
})
export class ToBGNMoneyPipe implements PipeTransform {
    transform(price: number) {
        return Number(price).toFixed(2) + ' лв.';
    }
}
