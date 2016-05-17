import { Component, Inject } from '@angular/core';

import { HelloWorldComponent } from './components/hello-world';
import { ClickMeComponent } from './components/click-me';
import { ToggleMeComponent } from './components/toggle-me';
import { NgForComponent } from './components/ng-for';
import { NgClassComponent } from './components/ng-class';
import { NgStyleComponent } from './components/ng-style';
import { NgIfComponent } from './components/ng-if';
import { AtInputComponent } from './components/at-input';
import { ToggleClassComponent } from './components/toggle-class';
import { KeyUpComponent } from './components/key-up';

import { AtColorDirective } from './directives/at-color';

import { MessageLengthPipe } from './pipes/message-length';

import { LanguagesService } from './services/languages';

@Component({
  selector: 'app',
  template: `
    <h1 class="title">Angular2TS Quick Start</h1>

    <!-- Components -->
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

    <h3 class="title">Ng Style Component</h3>
    <ng-style></ng-style>

    <h3 class="title">Ng If Component</h3>
    <ng-if></ng-if>

    <h3 class="title">At Input Component</h3>
    <at-input something="Angular 2"></at-input>

    <h3 class="title">Toggle Class Component</h3>
    <toggle-class></toggle-class>

    <h3 class="title">Key Up Component</h3>
    <key-up></key-up>

    <!-- Directives -->
    <h3 class="title">At Color Directive</h3>
    <p atColor>Hello Angular 2</p>

    <!-- Pipes -->
    <h3 class="title">Message Length Pipe</h3>
    <p>{{ message }} (Length: {{ message | length }})</p>

    <!-- Services -->
    <h3 class="title">Languages Service</h3>
    <p>Decided Language: {{ language }}</p>
  `,
  styles: [`
    .title {
      color: #3F51B5
    }
  `],
  directives: [
    // Components
    HelloWorldComponent,
    ClickMeComponent,
    ToggleMeComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgIfComponent,
    AtInputComponent,
    ToggleClassComponent,
    KeyUpComponent,

    // Directives
    AtColorDirective
  ],
  viewProviders: [
    // Services
    LanguagesService
  ],
  pipes: [
    // Pipes
    MessageLengthPipe
  ]
})
export class App {
  public message: string = 'Hello Angular 2';
  public language: string = '';

  constructor(@Inject(LanguagesService) languages) {
    this.language = languages.ts;
  }
}
