export class User {
    constructor(
        public $key: string,
        public name: string,
        public city: string,
        public dbemail: string,
        public uid: string,
        public skype: number) { }

    static fromJsonList(array): User[] {
        return array.map(User.fromJson);
    }

    static fromJson({$key, name, uid,
        city, dbemail, skype}): User {
        return new User(
            $key,
            name,
            city,
            dbemail,
            uid,
            skype);
    }
}