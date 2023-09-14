import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="card rounded-0 border-0 rounded-top-4 mt-3" style="max-height: 60px;">
      <div class="card-body mx-0">
        <div class="row">
          <div class="col-6">
            <span class="text-chianti fz-16 ff-mm">Langhong Contact: 02-1234567</span>
          </div>
          <div class="col-6 text-end">
            <span class="text-chianti opacity-75 fz-14">@Copyright Elegance. All Rights Reserved Designed by Elegance team</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        background: #ECDFC5;
      }
    `
  ]
})
export class FooterComponent {

}
