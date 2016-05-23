import { Component } from '@angular/core';

@Component({
  selector: 'more-content',
  template: `
    <ng-content select="[js]"></ng-content>
    <p>Angular 1</p>
    <ng-content select="[coffee]"></ng-content>
    <p>Angular 2</p>
    <ng-content select="[ts]"></ng-content>
  `
})
export class MoreContentComponent { }
