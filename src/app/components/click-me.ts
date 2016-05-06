import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe()">Click Me</button>
    <p>{{ message }}</p>
  `
})
export class ClickMeComponent {
  public message: string = '';

  onClickMe() {
    this.message = 'Hello Angular';
  }
}
