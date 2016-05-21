import { Component, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'get-data',
	template: `
	  <pre>{{ response }}</pre>
	`
})
export class GetDataComponent {
  constructor(private http: Http, private changeDetectorRef: ChangeDetectorRef) {
    http
      .get('./assets/data.json')
      .subscribe((data) => {
        this.response = data._body;
        changeDetectorRef.detectChanges();
      });
  }
}
