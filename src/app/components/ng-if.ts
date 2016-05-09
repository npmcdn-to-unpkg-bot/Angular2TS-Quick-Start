import { Component } from '@angular/core';

@Component({
  selector: 'ng-if',
  template: `
    <p *ngIf="true">Angular 2</p>
    <p *ngIf="false">Angular 1</p>
  `
})
export class NgIfComponent { }
