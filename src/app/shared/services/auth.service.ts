import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUser: any = null;
  public inOrNot = new EventEmitter<any>();

  constructor() {}

  public logInUser(user: any): void {
    this.authUser = user;
  }

  public isUserLogedIn(): boolean {
    return this.authUser != null;
  }
}
