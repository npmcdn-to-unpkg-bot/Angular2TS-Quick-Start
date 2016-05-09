import { Component } from '@angular/core';

@Component({
  selector: 'toggle-me',
  template: `
    <button (click)="onToggle()">Toggle Me</button>
    <p>{{ message }} Angular 2</p>
  `
})
export class ToggleMeComponent {
  public message: string = 'Hello';
  public toggle: boolean = true;

  onToggle() {
    this.toggle = !this.toggle;
    this.toggle ? this.message = 'Hello' : this.message = 'Goodbye';
  }
}
