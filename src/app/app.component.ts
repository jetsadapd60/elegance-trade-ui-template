import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        display: block;
        /* background: rgb(255,247,229); */
        /* background: linear-gradient(0deg, rgba(255,247,229,1) 0%, rgba(248,224,172,1) 100%); */
        /* background-image: linear-gradient(to bottom, #f8e0ae, #fae6bc, #fbecc9, #fdf1d7, #fff7e5); */
        width: 100%;
        height: 100vh;
        overflow: hidden;
      }
    `,
  ],
})
export class AppComponent {
  title = 'elegance-template-trade-ui';
}
