import { Component } from '@angular/core';

@Component({
  selector: 'toggle-class',
  template: `
    <button (click)="isClassVisible = !isClassVisible">Toggle Class</button>
    <p [ngClass]="{ 'try-it': isClassVisible }">Hello Angular 2</p>
  `,
  styles: [`
    .try-it {
      color: #F44336
    }
  `]
})
export class ToggleClassComponent { }
