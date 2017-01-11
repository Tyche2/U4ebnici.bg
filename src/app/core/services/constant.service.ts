import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
    LAST_ADDED: string;
    ALPHABETIC_ORDER: string;
    CLASS: string;
    PRICE: string;

    constructor() {
        this.LAST_ADDED = 'Последно добавени';
        this.ALPHABETIC_ORDER = 'Азбучен ред';
        this.CLASS = 'Клас';
        this.PRICE = 'Цена';
    }
}
