import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthService } from "../services/auth.service";

@Injectable()
//The auth guard is used to prevent unauthenticated users from accessing restricted routes
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authService.isAuthenticated();
  }
}