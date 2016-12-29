import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AuthService } from "../services/auth.service";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";

@Injectable()
//The auth guard is used to prevent unauthenticated users from accessing restricted routes
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router) {}
 
  canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot):Observable<any> {


        return this.authService.authInfo$
            .map(authInfo => authInfo.isLoggedIn())
            .take(1)
            .do(allowed => {
                if(!allowed) {
                    this.router.navigate(['/login']);
                }
            });
    }

}