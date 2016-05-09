import { Component, Input } from '@angular/core';

@Component({
  selector: 'at-input',
  template: `
    <p>Hello {{ something }}</p>
  `
})
export class AtInputComponent {
  @Input('something') something: string;
}
