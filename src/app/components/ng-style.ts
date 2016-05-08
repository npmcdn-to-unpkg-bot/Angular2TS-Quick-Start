import { Component } from '@angular/core';

@Component({
  selector: 'ng-style',
  template: `
    <p>
      <span [ngStyle]="{ 'background-color': '#FFEB3B' }">Angular 2</span>
      and TypeScript
    </p>
  `
})
export class NgStyleComponent { }
