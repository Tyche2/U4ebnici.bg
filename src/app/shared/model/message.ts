export class Message {

    constructor(
        public $key: string,
        public announcementid: string,
        public answered: boolean,
        public fromuserid: string,
        public read: boolean,
        public sent: string,
        public text: string,
        public touserid: string) {
    }

    static fromJsonList(array): Message[] {
        return array.map(Message.fromJson);
    }

    static fromJson({$key, announcementid, answered,
        fromuserid, read, sent, text, touserid}): Message {
        return new Message(
            $key,
            announcementid,
            answered,
            fromuserid,
            read,
            sent,
            text,
            touserid);
    }
}










