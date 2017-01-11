import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

import { AuthUser } from './authUser.model';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public firebaseAuth: AngularFireAuth) {
    firebaseAuth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  get userId(): string {
    return this.isAuthenticated ? this.authState.uid : '';
  }

  signUpUser(user: AuthUser): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.createUser({ email: user.email, password: user.password });
  }

  signInUser(user: AuthUser): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.login({ email: user.email, password: user.password });
  }

  logout(): void {
    return this.firebaseAuth.logout();
  }
}
