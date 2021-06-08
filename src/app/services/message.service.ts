import { Injectable } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: Message[] = [];
  private message = new BehaviorSubject(this.messages);
  currentMessage = this.message.asObservable();  

  setMessage(status: string, message: string, summary: string) {
    
    let messages: Message[] = [];
    if (status === 'success') {      
      messages.push({ severity: 'success', summary: summary, detail: message });
      this.message.next(messages);
    }else if(status === 'warn'){
      messages.push({ severity: 'warn', summary: summary, detail: message });
      this.message.next(messages);
    }else {            
      messages.push({ severity: 'error', summary: summary, detail: message });
      this.message.next(messages);
    }


    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  }

  clearMessage() {
    this.message.next([]);
  }
}
