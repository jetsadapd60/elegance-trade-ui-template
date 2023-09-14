import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-asset',
  template: `

    <div class="row">

    <!-- ซ้าย -->
      <div class="col-xl-8">
        <div class="card btn-gradient-2 rounded-0 border bg-transaction rounded-bottom-4" style="height: 98px;">
          <div #top class="card-body py-1">
            ok
          </div>
        </div>
        <div #content class="d-flex flex-column flex-xl-row gap-3 pt-3">
            <div class="w-100 w-xl-50">
              <div class="card h-100  border-gradient rounded-4">
                <div class="card-body p-0 py-3">
                  <div class="py-2 d-flex align-items-center gap-2 justify-content-center">
                    <img src="assets/images/lhc-gold-95.svg" class="ww-32" alt="">
                    <small class="text-warning fz-24">ทองคำแท่ง 96.50%</small>
                  </div>
                  <div class="d-flex justify-content-center text-center">
                    <!-- CHART -->
                    <chart></chart>
                  </div>

                  <div class="row px-3 m-0 border-bottom py-3">
                    <div class="col-1">
                      <span class="d-block hh-8 rounded-circle ww-8" style="background: var(--yellow-500);"></span>
                    </div>
                    <div class="col-11 ps-0 py-0">
                      <div class="d-flex justify-content-between pb-1">
                        <p class="m-0 fz-18 text-charcoal">ทองฝาก</p>
                        <p class="m-0 fz-18 text-charcoal ff-mm">30 Bg</p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <small class="fz-14 text-dull">มูลค่ารวม ณ ปัจจุบัน</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">968,700 <span class="ff-kr">บาท</span></p>
                      </div>
                    </div>
                    <!--  -->
                  </div>

                  <div class="row px-3 m-0 border-bottom py-3">
                    <div class="col-1">
                      <span class="d-block hh-8 rounded-circle ww-8" style="background: var(--blue-500);"></span>
                    </div>
                    <div class="col-11 ps-0 py-0">
                      <div class="d-flex justify-content-between  pb-1">
                        <p class="m-0 fz-18 text-charcoal">ทองรอชำระ(ซื้อ)</p>
                        <p class="m-0 fz-18 text-charcoal ff-mm">15 Bg</p>
                      </div>

                      <div class="d-flex justify-content-between  pb-1">
                        <small class="fz-14 text-dull">(มูลค่าต้นทุนเฉลี่ย)</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">32,000 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between  pb-1">
                        <small class="fz-14 text-dull">มูลค่ารวม</small>
                        <p class="m-0 fz-14 text-homeworld text-danger ff-mm">480,000 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <small class="fz-14 text-dull">กำไร/ขาดทุน</small>
                        <p class="m-0 fz-14 text-homeworld text-success ff-mm">+4,350 <span class="ff-kr">บาท</span></p>
                      </div>
                    </div>
                  </div>


                  <div class="row px-3 m-0 py-3">
                    <div class="col-1">
                    <span class="d-block hh-8 rounded-circle ww-8" style="background: var(--green-500);"></span>
                    </div>
                    <div class="col-11 ps-0 py-0">
                      <div class="d-flex justify-content-between pb-1">
                        <p class="m-0 fz-18 text-charcoal">ทองรอส่งมอบ(ขาย)</p>
                        <p class="m-0 fz-18 text-charcoal ff-mm">3 Bg</p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <small class="fz-14 text-dull">(มูลค่าต้นทุนเฉลี่ย)</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">968,700 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <small class="fz-14 text-dull">มูลค่ารวม</small>
                        <p class="m-0 fz-14 text-homeworld text-danger ff-mm">480,000 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <small class="fz-14 text-dull">กำไร/ขาดทุน</small>
                        <p class="m-0 fz-14 text-homeworld text-success ff-mm">+4,350 <span class="ff-kr">บาท</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-100 w-xl-50">
              <div class="card h-100 border-gradient rounded-4">
                <div class="card-body p-0 py-3">
                  <div class="py-2 d-flex align-items-center gap-2 justify-content-center">
                    <img src="assets/images/lhc-gold-95.svg" class="ww-32" alt="">
                    <small class="text-warning fz-24">ทองคำแท่ง 96.50%</small>
                  </div>
                  <div class="d-flex justify-content-center text-center">
                    <!-- CHART -->
                    <chart></chart>
                  </div>

                  <div class="row px-3 m-0 border-bottom py-3">
                    <div class="col-1">
                      <span class="d-block hh-8 rounded-circle ww-8" style="background: var(--yellow-500);"></span>
                    </div>
                    <div class="col-11 ps-0 py-0">
                      <div class="d-flex justify-content-between pb-1">
                        <p class="m-0 fz-18 text-charcoal">ทองฝาก</p>
                        <p class="m-0 fz-18 text-charcoal ff-mm">30 Bg</p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <small class="fz-14 text-dull">มูลค่ารวม ณ ปัจจุบัน</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">968,700 <span class="ff-kr">บาท</span></p>
                      </div>
                    </div>
                    <!--  -->
                  </div>

                  <div class="row px-3 m-0 border-bottom py-3">
                    <div class="col-1">
                      <span class="d-block hh-8 rounded-circle ww-8" style="background: var(--blue-500);"></span>
                    </div>
                    <div class="col-11 ps-0 py-0">
                      <div class="d-flex justify-content-between  pb-1">
                        <p class="m-0 fz-18 text-charcoal">ทองรอชำระ(ซื้อ)</p>
                        <p class="m-0 fz-18 text-charcoal ff-mm">15 Bg</p>
                      </div>

                      <div class="d-flex justify-content-between  pb-1">
                        <small class="fz-14 text-dull">(มูลค่าต้นทุนเฉลี่ย)</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">32,000 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between  pb-1">
                        <small class="fz-14 text-dull">มูลค่ารวม</small>
                        <p class="m-0 fz-14 text-homeworld text-danger ff-mm">480,000 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <small class="fz-14 text-dull">กำไร/ขาดทุน</small>
                        <p class="m-0 fz-14 text-homeworld text-success ff-mm">+4,350 <span class="ff-kr">บาท</span></p>
                      </div>
                    </div>
                  </div>


                  <div class="row px-3 m-0 py-3">
                    <div class="col-1">
                    <span class="d-block hh-8 rounded-circle ww-8" style="background: var(--green-500);"></span>
                    </div>
                    <div class="col-11 ps-0 py-0">
                      <div class="d-flex justify-content-between pb-1">
                        <p class="m-0 fz-18 text-charcoal">ทองรอส่งมอบ(ขาย)</p>
                        <p class="m-0 fz-18 text-charcoal ff-mm">3 Bg</p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <small class="fz-14 text-dull">(มูลค่าต้นทุนเฉลี่ย)</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">968,700 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <small class="fz-14 text-dull">มูลค่ารวม</small>
                        <p class="m-0 fz-14 text-homeworld text-danger ff-mm">480,000 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <small class="fz-14 text-dull">กำไร/ขาดทุน</small>
                        <p class="m-0 fz-14 text-homeworld text-success ff-mm">+4,350 <span class="ff-kr">บาท</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <!-- ขวา -->
      <div class="col-xl-4 mt-3 mt-xl-0">
        <div class="card border-gradient h-100 rounded-0 rounded-bottom-4">
          <div class="card-body px-0">
            <div class="text-center border-bottom py-2">
              <h4 class="m-0 fz-24 text-charcoal mb-1">เงินหลักประกัน</h4>
              <h4 class="m-0 fz-24 text-lake ff-mm">2,000,00 <span class="ff-kl">บาท</span></h4>
            </div>
            <div class="row mx-0 px-3 border-bottom py-2">
              <div class="col-2 d-flex flex-column justify-content-center">
                <img src="assets/images/lhc-gold-95.svg" class="ww-32" alt="">
                <small class="text-charcoal fz-10">96.50%</small>
              </div>
              <div class="col-5 ps-0">
                <p class="m-0 fz-16 text-charcoal">วงเงินขาย</p>
                <p class="m-0 fz-26 ff-mm text-lake">20,000 Bg</p>
              </div>
              <div class="col-5 pe-0">
                <p class="m-0 fz-16 text-charcoal">วงเงินซื้อ</p>
                <p class="m-0 fz-26 ff-mm text-homeworld">20,000 Bg</p>
              </div>
            </div>
            <div class="row mx-0 px-3 border-bottom py-2">
              <div class="col-2 d-flex flex-column justify-content-center">
                <img src="assets/images/lhc-gold-99.svg" class="ww-32" alt="">
                <small class="text-metallic fz-10">99.99%</small>
              </div>
              <div class="col-5 ps-0">
                <p class="m-0 fz-16 text-mist">วงเงินขาย</p>
                <p class="m-0 fz-26 ff-mm text-lake">20 Kg</p>
              </div>
              <div class="col-5">
                <p class="m-0 fz-16 text-mist">วงเงินซื้อ</p>
                <p class="m-0 fz-26 ff-mm text-homeworld">20 Kg</p>
              </div>
            </div>
            <div class="text-center border-bottom py-2">
              <h4 class="m-0 fz-24 text-mist mb-1">ทองหลักประกัน</h4>
              <h4 class="m-0 fz-24 text-vista ff-mm">3,850,000 <span class="ff-kl">บาท</span></h4>
            </div>
            <div class="row mx-0 px-3 border-bottom py-2">
              <div class="col-2 d-flex flex-column justify-content-center">
                <img src="assets/images/lhc-gold-95.svg" class="ww-32" alt="">
                <small class="text-metallic fz-10">96.50%</small>
              </div>
              <div class="col-4 ps-0">
                <p class="m-0 fz-16 text-white">วงเงินขาย</p>
                <p class="m-0 fz-26 ff-mm text-lake">20 Bg</p>
              </div>
              <div class="col-6 text-end">
              <p class="m-0 fz-16 text-charcoal">มูลค่า</p>
                <p class="m-0 fz-22 ff-mm text-lake">2,800,000 <span class="ff-kr">บาท</span></p>
              </div>
            </div>
            <div class="row mx-0 px-3 border-bottom py-2">
              <div class="col-2 d-flex flex-column justify-content-center">
                <img src="assets/images/lhc-gold-99.svg" class="ww-32" alt="">
                <small class="text-metallic fz-10">99.99%</small>
              </div>
              <div class="col-4 ps-0">
                <p class="m-0 fz-16 text-white">s</p>
                <p class="m-0 fz-26 ff-mm text-homeworld">20 Kg</p>
              </div>
              <div class="col-6 text-end">
                <p class="m-0 fz-16 text-charcoal">มูลค่า</p>
                <p class="m-0 fz-22 ff-mm text-homeworld">2,800,000 <span class="ff-kr">บาท</span></p>
              </div>
            </div>
            <div class="row mx-0 px-3 border-bottom py-2">
              <div class="col-12 py-0 d-flex justify-content-between pd-1">
                <p class="m-0 fz-16 text-charcoal">Margin</p>
                <p class="m-0 fz-16 text-charcoal ff-mm">5,850,000 <span class="ff-kr">บาท</span></p>
              </div>
              <div class="col-12 py-0 d-flex justify-content-between pd-1">
                <p class="m-0 fz-16 text-charcoal">Maintenance Margin</p>
                <p class="m-0 fz-16 text-charcoal ff-mm">0 <span class="ff-kr">บาท</span></p>
              </div>
              <!-- <div class="col-12 py-0 d-flex justify-content-between pd-1">
                <p class="m-0 fz-16 text-charcoal">Maintenance margin</p>
                <p class="m-0 fz-16 text-charcoal ff-mm">0 <span class="ff-kr">บาท</span></p>
              </div> -->
            </div>
            <!-- <div class="row mx-0 px-3 py-2">
              <div class="col-12 py-0 d-flex justify-content-between pd-1">
                <p class="m-0 fz-16 text-charcoal">Call</p>
                <p class="m-0 fz-16 text-danger ff-mm">5,850,000 <span class="ff-kr text-charcoal">บาท</span></p>
              </div>
              <div class="col-12 py-0 d-flex justify-content-between">
                <p class="m-0 fz-16 text-charcoal">Force</p>
                <p class="m-0 fz-16 text-charcoal ff-mm">0 <span class="ff-kr">บาท</span></p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

  `,
  styles: [`

    .border-gradient {
      background: linear-gradient(white, white) padding-box,
                  linear-gradient(199deg, #e9e1d6, #aba59d, #e7e5df, #b9a68b) border-box;
      /* border-radius: 50em !important; */
      border: 3px solid transparent !important;
    }
    .bg-transaction {
      background: rgb(66,62,54);
      background: linear-gradient(0deg, rgba(66,62,54,1) 0%, rgba(154,143,117,1) 100%);
    }

  `]
})
export class AssetComponent implements AfterViewInit {

  @ViewChild('top') topEl!: ElementRef;
  @ViewChild('content') content!: ElementRef;


  ngAfterViewInit(): void {

    this.cutstomElHeight();
    
    window.onresize = () => {
      this.cutstomElHeight();
    }

    
  }

  private cutstomElHeight() {
    let topElWidth = this.topEl.nativeElement.offsetHeight;
      this.content.nativeElement.style.height = `calc(100% - ${topElWidth}px)`;
  }

}
