import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18n Selec
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18Plural

  public clients: string[] = ['Hugo', 'Jose', 'Victoria', 'Ana', 'Maria', 'Veronica', 'Roberto'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe

  public person = {
    name: 'Hugo',
    age: 30,
    address: 'Tlalpan, CDMX'
  }

  // Async Pipe
  public myObservableTimer = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('object');
      resolve('Tenemos data en la promesa');
    }, 3500);
  })
}
