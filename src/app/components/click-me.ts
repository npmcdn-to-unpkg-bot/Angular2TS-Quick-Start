import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClick()">Click Me</button>
    <p>{{ message }}</p>
  `
})
export class ClickMeComponent {
  public message: string = '';

  onClick() {
    this.message = 'Hello Angular';
  }
}
