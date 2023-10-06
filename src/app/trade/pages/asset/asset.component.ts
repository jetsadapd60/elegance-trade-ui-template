import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-asset',
  template: `

    <div class="row">

    <!-- ซ้าย -->
      <div class="col-xl-8">
        <div class="card btn-gradient-2 rounded-0  bg-transaction rounded-bottom-4" style="height: 98px;">
          <div #top class="card-body py-1">
            <div class="row">
              <div class="col-3 ">
                <div>
                  <p class="mb-1 text-white">ทำธุรกรรม</p>
                  <div class="d-flex justify-content-between">
                    <div class="d-flex gap-3">
                      <label for="deposit" class="radio-style">
                        <input checked class="radio-style__input" type="radio" name="transaction" id="deposit">
                        <span class="radio-style__design"></span>
                        <span class="radio-style__value text-white">ฝาก</span>
                      </label>
                    </div>
                    <div class="d-flex gap-3">
                      <label for="widthdraw" class="radio-style">
                        <input class="radio-style__input" type="radio" name="transaction" id="widthdraw">
                        <span class="radio-style__design"></span>
                        <span class="radio-style__value text-white">ถอน</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-9 ">
                <p class="mb-1 text-white">ประเภท</p>
                <div class="row">
                  <div class="col-8 py-0 ">
                  <div class="custom-select">
                    <select class="w-100 text-center py-0">
                      <option selected value="1">ทองคำแท่ง 96.50%</option>
                      <option value="2">ทองคำแท่ง 99.99%</option>
                    </select>
                  </div>
                  </div>
                  <div class="col-4 py-0 ">
                    <app-button height="35px" bgColor="#FFC455" borderRadius="5px" textColor="#0D0B0B">ดำเนินการ</app-button>
                  </div>
                </div>
              </div>
            </div>
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
                        <small class="fz-14 text-dull">มูลค่าต้นทุน</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">32,000 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between  pb-1">
                        <small class="fz-14 text-dull">มูลค่า ณ ปัจจุบัน</small>
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
                        <small class="fz-14 text-dull">มูลค่าต้นทุน</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">968,700 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <small class="fz-14 text-dull">มูลค่า ณ ปัจจุบัน</small>
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
                    <small class="text-warning fz-24">ทองคำแท่ง 99.99%</small>
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
                        <p class="m-0 fz-18 text-charcoal ff-mm">30 Kg</p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <small class="fz-14 text-dull">มูลค่าต้นทุน</small>
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
                        <p class="m-0 fz-18 text-charcoal ff-mm">15 Kg</p>
                      </div>

                      <div class="d-flex justify-content-between  pb-1">
                        <small class="fz-14 text-dull">มูลค่าต้นทุน</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">32,000 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between  pb-1">
                        <small class="fz-14 text-dull">มูลค่ารวม ณ ปัจจุบัน</small>
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
                        <p class="m-0 fz-18 text-charcoal ff-mm">3 Kg</p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <small class="fz-14 text-dull">มูลค่าต้นทุน</small>
                        <p class="m-0 fz-14 text-homeworld ff-mm">968,700 <span class="ff-kr">บาท</span></p>
                      </div>

                      <div class="d-flex justify-content-between pb-1">
                        <small class="fz-14 text-dull">มูลค่า ณ ปัจจุบัน</small>
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
              <h4 class="m-0 fz-24 text-charcoal mb-1">
                <!-- <img src="assets/images/dollar-icon.svg" alt=""> -->
                <span class="text-homeworld fz-26 ff-mm">$</span>
                <span> เงินหลักประกัน</span>
              </h4>
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
              <h4 class="align-items-start gap-1 d-flex fz-24 justify-content-center m-0 mb-1 text-mist">
                <img src="assets/images/gold-bar-1.svg" class="ww-36" alt="">
                <span>ทองหลักประกัน</span>
              </h4>
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
            <div class="row mx-0 px-3 py-2">
              <!-- <div class="col-12 py-0 d-flex justify-content-between pd-1">
                <p class="m-0 fz-16 text-charcoal">Call</p>
                <p class="m-0 fz-16 text-danger ff-mm">5,850,000 <span class="ff-kr text-charcoal">บาท</span></p>
              </div>
              <div class="col-12 py-0 d-flex justify-content-between">
                <p class="m-0 fz-16 text-charcoal">Force</p>
                <p class="m-0 fz-16 text-charcoal ff-mm">0 <span class="ff-kr">บาท</span></p>
              </div> -->
              <div class="col-12 text-center">
                <img src="assets/images/arrow-refresh.svg" type="button" class="me-2 ww-43" alt="">
                <span class="fz-14 text-homeworld ff-mm" type="button">Refresh</span>
              </div>
              <div class="col-12 pt-0 text-center fz-16 text-dull">
                <span class=" pe-1">*Update ล่าสุด</span>
                <span>{{nowTime|date:'hh:mm:ss'}}</span>
              </div>
            </div>
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

    .radio-style {
      display: flex;
      align-items: center;
      /* margin: 15px 20px; */
      cursor: pointer;

      &__input {
        opacity: 0;
        /* display: none; */
        
        &:checked~.radio-style__design {
          transition: all .4s;
          background: #FFC455 !important;
        }
      }


      &__design {
        width: 14px;
        height: 14px;
        background: #ffffff;
        border-radius: 100%;
        margin-right: 15px;
      }
      
      &__value {
        font-size: 18px;
      }
    }

    .custom-select {
      select {
        /* display: none; */
        height: 29px;
        border-radius: 5px;
        font-size: 14px;
        border: 1px solid #C7C7C7;
        

        -webkit-appearance: none;
        -moz-appearance: none;

        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right .5rem center;
        /* background-size: 2em; */
    }}

    @media (min-width: 1200px) {

    .radio-style {


      &__design {
        width: 16px;
        height: 16px;
      }
      
      &__value {
        font-size: 24px;
      }
    }

    .custom-select {
      select {
        /* display: none; */
        height: 35px;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid #C7C7C7;
        

        -webkit-appearance: none;
        -moz-appearance: none;

        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right .5rem center;
        /* background-size: 2em; */
    }}
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetComponent implements AfterViewInit {

  @ViewChild('top') topEl!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  nowTime = new Date();


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
