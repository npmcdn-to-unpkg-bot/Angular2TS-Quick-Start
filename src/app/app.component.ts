import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3 class="title">Angular2TS Quick Start</h3>
  `,
  styles: [``],
  viewProviders: []
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    console.log('Hello Angular 2')
  }
}
