import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginResponse;
  handleLogin(username: string, password: string): void {
    if (username && password) {
      this.loginResponse = this.loginService.login(username, password);
      this.messageService.add('You are now logged in.');
    } else {
      this.messageService.add('Missing credentials.');
    }
  }
  handleLogout() {
    this.loginResponse = '';
    this.messageService.add('You are now logged out.');
  }

  constructor(private loginService: LoginService,
  private messageService: MessageService) { }

  ngOnInit() {
  }

}
