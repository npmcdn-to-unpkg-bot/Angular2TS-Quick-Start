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

  onClick(): string {
    this.message = 'Hello Angular 2';
  }
}
