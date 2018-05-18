import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  login(username: string, password: string) {
    const response = btoa(username + ':' + password);
    sessionStorage.setItem('loggedIn', response);
    return response;
  }
  logout(): void {
    sessionStorage.removeItem('loggedIn');
  }
}
