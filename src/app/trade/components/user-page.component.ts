import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'user-page',
    template: `
      <div class="row">
        <div class="col-md-6 col-xxl-4">
          <div class="row">
            <div class=" col-xl-12">
              <div class="card rounded-0 rounded-top-3 border-0 border-top border-start border-end border-gold">
                <div class="card-body py-1">
                  <div class="d-flex align-items-center gap-2">
                    <div class="dot bg-primary rounded-circle"></div>
                    <span class="text-mist fz-14 ff-mm">Open</span>
                    <span class="text-primary fz-14 ff-mm">+50</span>
                  </div>
                  <div class="row">
                    <div class="col-2 py-0 px-0">
                      <img src="assets/images/lhc-gold-95.svg" style="max-width: 68px;" alt="">
                    </div>
                    <div class="col-10 py-0">
                      <div class="row">
                        <div class="col-8 py-0">
                          <span class="text-mist" style="font-size: 22px;">ราคาเล่งหงษ์</span>
                        </div>
                        <div class="col-4 py-0 text-end">
                          <span class="text-lake ff-mm fz-22">32,380</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-8 py-0">
                          <p class="m-0 text-grey fz-20 ff-kl">ทองคำแท่ง <span class="ff-mm"> 96.50</span> %</p>
                        </div>
                        <div class="col-4 py-0 text-end">
                          <span class="text-homeworld ff-mm fz-22">32,460</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="p-0 m-0" style="color: #E2E5E5;">
            </div>

            <div class=" col-xl-12">
              <div class="card rounded-0 border-0 border-start border-end border-gold">
                <div class="card-body py-1">
                  <div class="d-flex align-items-center gap-2">
                    <div class="dot bg-primary rounded-circle"></div>
                    <span class="text-mist fz-14 ff-mm">Open</span>
                    <span class="text-primary fz-14 ff-mm">+50</span>
                  </div>
                  <div class="row">
                    <div class="col-2 py-0 px-0">
                      <img src="assets/images/lhc-gold-99.svg" style="width: 68px;" alt="">
                    </div>
                    <div class="col-10 py-0">
                      <div class="row">
                        <div class="col-8 py-0">
                          <span class="text-mist" style="font-size: 22px;">ราคาเล่งหงษ์</span>
                        </div>
                        <div class="col-4 py-0 text-end">
                          <span class="text-lake ff-mm fz-22">33,580</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-8 py-0">
                          <p class="m-0 text-grey fz-20 ff-kl">ทองคำแท่ง <span class="ff-mm">99.99</span> %</p>
                        </div>
                        <div class="col-4 py-0 text-end">
                          <span class="text-homeworld ff-mm fz-22">33,620</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="p-0 m-0" style="color: #E2E5E5;">
            </div>

            <div class=" col-xl-12">
              <div class="card rounded-0 border-0 border-start border-end border-gold">
                <div class="card-body py-1">
                  <div class="d-flex align-items-center gap-2">
                    <div class="dot bg-primary rounded-circle"></div>
                    <span class="text-mist fz-14 ff-mm">Open</span>
                    <span class="text-primary fz-14 ff-mm">+50</span>
                  </div>
                  <div class="row">
                    <div class="col-2 py-0 px-0">
                      <img src="assets/images/lhc-coin.svg" style="max-width: 68px;" alt="">
                    </div>
                    <div class="col-10 py-0">
                      <div class="row">
                        <div class="col-8 d-flex gap-3 py-0">
                          <span class="text-mist fz-22 ff-km">LHC</span>
                          <img src="assets/images/COIN.svg" alt="">
                        </div>
                        <div class="col-4 ps-0 py-0 text-end">
                          <span class="text-lake ff-mm fz-22">20.0804</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="align-items-center col-8 d-flex py-0">
                          <span class="text-grey fz-14 ff-kr">1 LHC = 0.01 Gram of 96.50% </span>
                        </div>
                        <div class="col-4 ps-0 py-0 text-end">
                          <span class="text-homeworld ff-mm fz-22">21.0804</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="p-0 m-0" style="color: #E2E5E5;">
            </div>
            
            <!-- เวลาเปิดปิด -->
            <div class=" col-xl-12">
              <div class="border card rounded-0 rounded-bottom-3 border-top-0 border-0 border-start border-end  border-bottom border-gold">
                <div class="card-body text-center py-1">
                  <p class="ff-kr fz-14 m-0 py-1 text-haze">เวลาเปิด-ปิดซื้อขาย 07:00:00 - 02:00:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- graph -->
        <div class="col-md-6 col-xxl-8 mt-3 mt-md-0">
          <div class="card border-gold" style="height: 100%;">
            <div class="card-body">
              <trading-view></trading-view>
              <div class="text-center p-0 m-0 mt-3">
                <span class="text-haze fz-14 ff-kr">กราฟเป็นเพียงการแสดงความเคลื่อนไหวของราคาในตลาดเท่านั้น</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row mt-4">
        <!-- ราคาทองสมาคม -->
        <div class="col-xl-4">
          <div class="border border-gold card h-100 rounded">
            <div class="card-body py-1">
              <div class="d-flex align-items-center gap-2">
                <div class="dot bg-primary rounded-circle"></div>
                <span class="text-mist fz-14 ff-mm">Open</span>
                <span class="text-primary fz-14 ff-mm">+50</span>
              </div>
              <div class="row">
                <div class="col-2 py-0 px-0">
                  <img src="assets/images/lhc-gold-99.svg" style="width: 68px;" alt="">
                </div>
                <div class="col-10 py-0">
                  <div class="row">
                    <div class="col-8 py-0">
                      <span class="text-mist" style="font-size: 22px;">ราคาเล่งหงษ์</span>
                    </div>
                    <div class="col-4 py-0 text-end">
                      <span class="text-lake ff-mm fz-22">33,580</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8 py-0">
                      <p class="m-0 text-grey fz-20 ff-kl">ทองคำแท่ง <span class="ff-mm">99.99</span> %</p>
                    </div>
                    <div class="col-4 py-0 text-end">
                      <span class="text-homeworld ff-mm fz-22">33,620</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <!-- เวลาเปิดปิด -->
            <div class=" col-xl-12">
              <div class="card border-0">
                <div class="card-body text-center py-1">
                  <p class="ff-kr fz-14 m-0 py-1 text-haze">เวลาเปิด-ปิดซื้อขาย 07:00:00 - 02:00:00</p>
                </div>
            </div>
            </div>
            
          </div>
        </div>

        <!-- graph list -->
        <div class="col-xl-8 mt-3 mt-xl-0">
          <div class="border-gold card h-100 rounded">
            <div class="card-body">
              <div class="row">
                <div class="col-6 col-lg-3 col-xxl-3 text-center">
                  <p class="m-0 p-0 text-center text-danger">24 hour Gold</p>
                  <A HREF="http://www.kitco.com/connecting.html">
                  <IMG SRC="http://www.kitconet.com/charts/metals/gold/t24_au_xx_usoz_4.gif" BORDER="0" ALT="[Most Recent Quotes from www.kitco.com]">
                  </A>
                </div>
                <div class="col-6 col-lg-3 col-xxl-3 text-center">
                  <p class="m-0 p-0 text-center text-danger">24 hour Gold</p>
                  <A HREF="http://www.kitco.com/connecting.html">
                  <IMG SRC="http://www.kitconet.com/charts/metals/gold/t24_au_xx_uskg_4.gif" BORDER="0" ALT="[Most Recent Quotes from www.kitco.com]">
                  </A>
                </div>
                <div class="col-6 col-lg-3 col-xxl-3 text-center mt-3 mt-lg-0">
                  <p class="m-0 p-0 text-center text-danger">24 hour Silver</p>
                  <A HREF="http://www.kitco.com/connecting.html">
                  <IMG SRC="http://www.kitconet.com/charts/metals/silver/t24_ag_xx_usoz_4.gif" BORDER="0" ALT="[Most Recent Quotes from www.kitco.com]">
                  </A>
                </div>
                <div class="col-6 col-lg-3 col-xxl-3 text-center mt-3 mt-lg-0">
                  <p class="m-0 p-0 text-center text-danger">24 hour Silver</p>
                  <A HREF="http://www.kitco.com/connecting.html">
                  <IMG SRC="http://www.kitconet.com/charts/metals/silver/t24_ag_xx_uskg_4.gif" BORDER="0" ALT="[Most Recent Quotes from www.kitco.com]">
                  </A>
                </div>
              </div>
            </div>
          
            </div>
        </div>
      </div>
    `,
  styles: [`
    .wrap-content {
        background: #FCF3DE;
    }

    .dot {
        width: 8px;
        height: 8px;
    }

    .border-color {
        border: 1px solid var(--color-border) !important;
    }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent {}