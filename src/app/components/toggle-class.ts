import { Component } from '@angular/core';

@Component({
  selector: 'toggle-class',
  template: `
    <button (click)="isClassVisible = !isClassVisible">Toggle Class</button>
    <p [ngClass]="{ 'my-class': isClassVisible }">Hello Angular 2</p>
  `,
  styles: [`
    .my-class {
      color: #F44336
    }
  `]
})
export class ToggleClassComponent {
}
