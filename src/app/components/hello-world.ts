import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <input type="text" [(ngModel)]="name" placeholder="Enter your name">
    <p>Hello {{ name }}</p>
  `
})
export class HelloWorldComponent {
  public name: string = '';
}
