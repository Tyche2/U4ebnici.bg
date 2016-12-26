import {Observable} from 'rxjs/Rx';

export class Announcement {
    constructor(
        public $key: string,
        public title: string,
        public discipline: string,
        public authors: string,
        public publisher: string,
        public year: number,
        public clas: number,
        public price: number,
        public condition: string,
        public description: string,
        public image: string,
        public userid: string) { }

    static fromJsonList(array): Announcement[] {
        return array.map(Announcement.fromJson);
    }

    static fromJsonArray(json: any[]): Announcement[] {
        return json.map(Announcement.fromJson);
    }

    static fromJson({$key, title, discipline, authors, publisher, year, clas, price, condition, description,
        image, userid}): Announcement {
        return new Announcement(
            $key,
            title,
            discipline,
            authors,
            publisher,
            year,
            clas,
            price,
            condition,
            description,
            image,
            userid);
    }
}
