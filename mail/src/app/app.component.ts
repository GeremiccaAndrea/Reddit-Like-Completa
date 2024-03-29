import { Component } from '@angular/core';
import { Email } from './email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mail';

  emails : Email[] = [];
  nuovaMail(a: HTMLInputElement, oggetto: HTMLInputElement, corpo: HTMLInputElement): boolean {

    this.emails.push(new Email(a.value, oggetto.value, corpo.value)); //aggiungiamo una nuova mail al vettore
    console.log(this.emails)
    return false
  }
  
}
