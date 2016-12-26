export class DataModel {
    username: string
    password:  string
    id: number
    announcement: [{
             adId: number
             title:  string
             class: string
             category:  string
             publisher:  string
             year:  string
             price:  string
             condition:  string
             description: string
             image:  string
             authors: string[]
             user: {name: string,  city: string,  email: string,  skype:  string,  phone: string }
             messages: [{
                 username: string
                 text:  string
            }]
    }];
    usermessages: [{
         username: string
         text:  string 
    }]
}