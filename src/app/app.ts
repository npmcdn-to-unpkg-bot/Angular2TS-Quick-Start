import { Component } from '@angular/core';

import { HelloWorldComponent } from './components/hello-world';
import { ClickMeComponent } from './components/click-me';
import { ToggleMeComponent } from './components/toggle-me';
import { NgForComponent } from './components/ng-for';
import { NgClassComponent } from './components/ng-class';

@Component({
  selector: 'app',
  template: `
    <h1 class="title">Angular2TS Quick Start</h1>

    <h3 class="title">Hello World Component</h3>
    <hello-world></hello-world>

    <h3 class="title">Click Me Component</h3>
    <click-me></click-me>

    <h3 class="title">Toggle Me Component</h3>
    <toggle-me></toggle-me>

    <h3 class="title">Ng For Component</h3>
    <ng-for></ng-for>

    <h3 class="title">Ng Class Component</h3>
    <ng-class></ng-class>
  `,
  styles: [`
    .title {
      color: #3F51B5
    }
  `],
  directives: [
    HelloWorldComponent,
    ClickMeComponent,
    ToggleMeComponent,
    NgForComponent,
    NgClassComponent
  ],
  providers: [],
  pipes: []
})
export class App { }
