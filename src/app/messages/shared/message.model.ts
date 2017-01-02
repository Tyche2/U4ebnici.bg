export class Message {
    static fromJsonList(array): Message[] {
        return array.map(Message.fromJson);
    }

    static fromJson({$key, announcementid, answered,
        fromuserid, read, sent, msgText, touserid}): Message {
        return new Message(
            $key,
            announcementid,
            answered,
            fromuserid,
            read,
            sent,
            msgText,
            touserid);
    }

    constructor(
        public $key: string,
        public announcementid: string,
        public answered: boolean,
        public fromuserid: string,
        public read: boolean,
        public sent: string,
        public msgText: string,
        public touserid: string) {
    }
}










