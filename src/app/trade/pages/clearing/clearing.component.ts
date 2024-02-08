import { Component } from '@angular/core';

@Component({
  selector: 'app-clearing',
  template: `
    <div #top class="card rounded-0 rounded-top-4 border-0" style="min-height: 80px;">
          <div class="card-body py-1">
            <div class="row pt-1">
              <div class="col-md-3 border-0 border-end">
                <span class="text-chianti">วงเงินขาย</span>
                <p class="text-center text-lake mb-0 ff-mm fz-26">3,000 Bg</p>
              </div>
              <div class="col border-0 border-end">
                <span class="text-chianti">วงเงินซื้อ</span>
                <p class="text-center text-homeworld mb-0 ff-mm fz-26">3,000 Bg</p>
              </div>
              <div class="col border-0 border-end">
                <span class="text-chianti">ทองฝาก</span>
                <p class="text-center text-nacho mb-0 ff-mm fz-26">3,000 Bg</p>
              </div>
              <div class="col border-0 border-end">
                <span class="text-chianti">รอชำระ</span>
                <p class="text-center text-blossom mb-0 ff-mm fz-26">15/30 Bg</p>
              </div>
              <div class="col border-0">
                <span class="text-chianti">ส่งมอบ</span>
                <p class="text-center mb-0 ff-mm fz-26" style="color: #A91F27;">15/30 Bg</p>
              </div>
            </div>
          </div>
    </div>

    <clearing-table></clearing-table>
  `,
  styles: [
  ]
})
export class ClearingComponent {

}
