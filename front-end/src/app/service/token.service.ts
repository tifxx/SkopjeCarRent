import { Injectable } from '@angular/core';
import { User } from '../model/User';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  signOut(): void {
    window.sessionStorage.clear();
  }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): User | undefined {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const parsedUser =  JSON.parse(user);
      return parsedUser
    }
    return undefined;
  }

  getRole(): String | null {
    let role = this.getUser()?.role;
    return role ? role : null;
  }

}
