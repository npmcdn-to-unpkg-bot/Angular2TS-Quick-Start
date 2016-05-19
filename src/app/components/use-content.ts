import { Component } from '@angular/core';

@Component({
  selector: 'use-content',
  template: `
    <p>Hi, TypeScript</p>
    <ng-content></ng-content>
  `
})
export class UseContnetComponent { }
