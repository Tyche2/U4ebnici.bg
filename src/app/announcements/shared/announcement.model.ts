import { Observable } from 'rxjs/Rx';

export class Announcement {
    constructor(
        public $key: string,
        public active: boolean,
        public added: string,
        public authors: string,
        public clas: string,
        public condition: string,
        public description: string,
        public discipline: string,
        public image: string,
        public price: number,
        public publisher: string,
        public title: string,
        public userid: string,
        public year: number) { }

    static fromJsonList(array): Announcement[] {
        return array.map(Announcement.fromJson);
    }

    static fromJsonArray(json: any[]): Announcement[] {
        return json.map(Announcement.fromJson);
    }

    static fromJson({$key, active, added, authors, clas, condition, description, discipline, image, price, publisher, title,
        userid, year}): Announcement {
        return new Announcement(
            $key,
            active,
            added,
            authors,
            clas,
            condition,
            description,
            discipline,
            image,
            price,
            publisher,
            title,
            userid,
            year);
    }
}
