import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
    <input #new="" (keyup)="onKeyup(new.value)">
    <p>{{ keyupValues }}</p>
  `
})
export class KeyUpComponent {
  public keyupValues: string = '';

  onKeyup(value: string) {
    this.keyupValues += `${value} | `;
  }
}
