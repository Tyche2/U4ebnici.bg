import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { UserService } from '../../users/shared/users.service';
import { User } from '../../users/shared/User.model';

@Pipe({
    name: 'getUser'
})
export class GetUserPipe implements PipeTransform {
    constructor(private userService: UserService) { }

    transform(key: string) {
        return this.userService.getUserByKey(key);
    }
}
