import { Component } from '@angular/core';

import { HelloWorldComponent } from './components/hello-world';
import { ClickMeComponent } from './components/click-me';

@Component({
  selector: 'app',
  template: `
    <h3 class="title">Hello Angular</h3>
    <hello-world></hello-world>
    <click-me></click-me>
  `,
  styles: [`
    .title {
      color: #3F51B5
    }
  `],
  directives: [
    HelloWorldComponent,
    ClickMeComponent
  ],
  providers: [],
  pipes: []
})
export class App { }
