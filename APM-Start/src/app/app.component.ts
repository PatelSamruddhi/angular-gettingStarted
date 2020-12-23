import { Component } from '@angular/core';


@Component({
 selector: 'pm-root',
  template: `
  <pm-products></pm-products>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Product Management';
}
