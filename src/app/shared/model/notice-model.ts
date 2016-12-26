export class Notice {
    constructor(
        public $key: string,
        public title: string,
        public clas: string,
        public category: string,
        public publisher: string,
        public year: string,
        public price: string,
        public condition: string,
        public description: string,
        public image: string,
        public authors: string[],
        public user: string,
        public messages: [{
            username: string,
            text: string,
        }])
    { }
    static fromJsonList(array): Notice[] {
        return array.map(Notice.fromJson);
    }

    static fromJson({$key, title, clas, category, publisher, year, price, condition, description,
        image, authors, user, messages}): Notice {
        return new Notice(
            $key,
            title,
            clas,
            category,
            publisher,
            year,
            price,
            condition,
            description,
            image,
            authors,
            user,
            messages);
    }
}