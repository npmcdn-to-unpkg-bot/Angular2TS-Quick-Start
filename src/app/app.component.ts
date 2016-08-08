import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3 class="title">Angular2TS Quick Start</h3>
    <div class="content">
      <p>Hello Angular 2</p>
    </div>
  `,
  styles: [`
    .title {
      color: #3F51B5;
      text-align: center;
    }

    .content {
      display: flex;
      justify-content: center;
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
