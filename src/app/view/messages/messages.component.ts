import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.currentMessage.subscribe(data => {
      if (data !== []) {
        this.messages = data;
      }
    });    
  }

  clearMessage() {
    this.messageService.clearMessage();
  }
}
