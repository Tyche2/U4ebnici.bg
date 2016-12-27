import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../shared/model/users.service';
import { Observable } from 'rxjs/Rx';
import { User } from '../shared/model/user';

@Pipe({
    name: 'getUser'
})
export class GetUserPipe implements PipeTransform {
    constructor(private userService: UserService) { }

    transform(key: string) {
        return this.userService.getUserByKey(key);
    }
}
