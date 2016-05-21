import { Component } from '@angular/core';

@Component({
  selector: 'at-properties',
  template: `
    <p>Hello Angular {{ atVersion }}</p>
  `,
  properties: ['atVersion']
})
export class AtPropertiesComponent { }
