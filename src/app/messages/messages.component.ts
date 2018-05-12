import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = this.messageService.getMessages();
  handleClearMsg(): void {
    this.messageService.clear();
    this.messages = this.messageService.getMessages();
  }

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
