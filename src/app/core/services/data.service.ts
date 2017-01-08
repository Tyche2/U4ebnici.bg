import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class DataService {

    constructor(private firebaseDb: AngularFireDatabase) {}

    getItem(url: string): FirebaseObjectObservable<any> {
        return this.firebaseDb.object(url);
    }

    saveItem(item: string | FirebaseObjectObservable<any>, newData: Object): firebase.Promise<void> {
        if (typeof (item) === 'string') {
            item = this.getItem(item);
        }
        return item.set(newData);
    }

    updateItem(item: string | FirebaseObjectObservable<any>, newData: Object): firebase.Promise<void> {
        if (typeof (item) === 'string') {
            item = this.getItem(item);
        }
        return item.update(newData);
    }

    deleteItem(item: string | FirebaseObjectObservable<any>): firebase.Promise<void> {
        if (typeof (item) === 'string') {
            item = this.getItem(item);
        }
        return item.remove();
    }

    getCollection(url: string, query?: Object): FirebaseListObservable<any> {
        if (query) {
            return this.firebaseDb.list(url, query);
        } else {
            return this.firebaseDb.list(url);
        }
    }

    addItemToCollection(collection: string | FirebaseListObservable<any>, item: Object): firebase.database.ThenableReference {
        if (typeof (collection) === 'string') {
            collection = this.getCollection(collection);
        }
        return collection.push(item); 
    }

    updateItemFromCollection(collection: string | FirebaseListObservable<any>, itemKey: string, newData: Object): firebase.Promise<void> {
        if (typeof (collection) === 'string') {
            collection = this.getCollection(collection);
        }
        return collection.update(itemKey, newData);
    }

    deleteItemFromCollection(collection: string | FirebaseListObservable<any>, itemKey: string): firebase.Promise<void> {
        if (typeof (collection) === 'string') {
            collection = this.getCollection(collection);
        }
        return collection.remove(itemKey);
    }
}
