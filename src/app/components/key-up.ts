import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
    <input #my (keyup)="onKeyup(my.value)">
    <p>{{ values }}</p>
  `
})
export class KeyUpComponent {
  public valuse: string = '';

  onKeyup(value: string) {
     this.values += `${value} | `;
  }
}
