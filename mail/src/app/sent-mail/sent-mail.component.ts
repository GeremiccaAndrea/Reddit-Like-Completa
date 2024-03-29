import { Component, Input } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() x!:Email; //! = alternativa a strict = false
  nascondi: boolean = false;
  
  espandi(): boolean{
    this.nascondi = !this.nascondi; // ! = not (se la variabile è true diventa false e viceversa), ! lo possiamo utilizzare solo con valori booleani
    return false
  }
}
