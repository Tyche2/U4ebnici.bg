export class User {
    static fromJsonList(array): User[] {
        return array.map(User.fromJson);
    }

    static fromJson({$key, name,
        city, phone, dbemail, skype, uid}): User {
        return new User(
            $key,
            name,
            city,
            phone,
            dbemail,
            skype,
            uid);
    }

    constructor(
        public $key: string,
        public name: string,
        public city: string,
        public phone: string,
        public dbemail: string,
        public skype: number,
        public uid: string,
        ) { }
}
