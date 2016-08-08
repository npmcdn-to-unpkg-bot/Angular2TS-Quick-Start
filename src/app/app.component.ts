import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3 class="title">Angular2TS Quick Start</h3>
  `,
  styles: [`
    .title {
      color: #3F51B5;
    }
  `],
  directives: [],
  providers: [],
  viewProviders: [],
  pipes: []
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    console.log('Hello Angular 2')
  }
}
