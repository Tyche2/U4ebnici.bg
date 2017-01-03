import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    addItemToCollection(collectionName: string, item: any) {
        let collection = this.getCollection(collectionName);
        collection.push(item);
        localStorage.setItem(collectionName, JSON.stringify(collection));
    }

    getCollection(collectionName: string) {
        let collection = JSON.parse(localStorage.getItem(collectionName));
        return collection || [];
    }
}
