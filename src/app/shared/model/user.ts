export class User {
    constructor(
        public $key: string,
        public name: string,
        public uid: string,
        public city: string,
        public email: string,
        public skype: number) { }

    static fromJsonList(array): User[] {
        return array.map(User.fromJson);
    }

    static fromJson({$key, name, uid,
        city, email, skype}): User {
        return new User(
            $key,
            name,
            uid,
            city,
            email,
            skype);
    }
}