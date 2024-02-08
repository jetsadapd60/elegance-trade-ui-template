import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-tab',
    template: `
    
    <div class="container-fluid tab-f" style="min-height: 56px;">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-md-6 col-xl-4 py-0">
          <div class="border-0 card h-100 px-5 rounded-0 tab-l">
            <div class="row pt-1">
              <div class="align-items-start col-6 d-flex ps-0 py-1">
                <img src="assets/images/flag.svg" style="max-width: 35px;" alt="">
                <div class="">
                  <p class="m-0 text-white ff-kr fz-22" style="line-height: 1;">USDTHB</p>
                  <span class="text-danger ff-mm fz-14">-0.080</span>
                </div>
              </div>
              <div class="align-items-start col-6 d-flex justify-content-between py-1">
                <span class="text-glaze ff-mm fz-22" style="line-height: 1;">34.67</span>
                <span class="text-nacho ff-mm fz-22" style="line-height: 1;">34.69</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-4 py-0">
          <div class="border-0 card h-100 px-5 rounded-0 tab-l">
            <div class="row pt-1">
              <div class="align-items-start col-6 d-flex ps-0 py-1">
                <img src="assets/images/gold.svg" style="max-width: 35px;" alt="">
                <div class="">
                  <p class="m-0 text-white ff-kr fz-22" style="line-height: 1;">XAUUSD</p>
                  <span class="text-green ff-mm fz-14">+0.080</span>
                </div>
              </div>
              <div class="align-items-start col-6 d-flex justify-content-between py-1">
                <span class="text-glaze ff-mm fz-22" style="line-height: 1;">34.67</span>
                <span class="text-nacho ff-mm fz-22" style="line-height: 1;">34.69</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12 col-xl-4 py-0">
          <div class="card border-0 h-100 rounded-0 px-5" style="background: transparent;">
            <div class="row h-100">
              <div class="col-xl-9 offset-0 offset-xl-3 h-100 align-items-center d-flex justify-content-center  justify-content-xl-end pe-0">
                <p class="mb-0 text-center text-xl-end text-white">{{date|date:'dd/MM/yyyy hh:mm:ss':'UTC+7' }} (UTC+7)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    `,
    styles: [`
    
    .tab-full {
        background: rgba(132, 123,101, 1);
      }
      
      .tab-f {
        background: rgba(154, 143, 117, 1);
      }

      .tab-l {
        background: rgb(54,51,44);
        background: linear-gradient(0deg, rgba(54,51,44,1) 0%, rgba(154,143,117,1) 100%);
      }

      .top-bar {
        /* box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05); */
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
    date = new Date();
    intervalId: any;

    constructor(private ref: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.nowDate();
    }

    private nowDate() {
        this.intervalId = setInterval(() => {
            this.date = new Date();
            this.ref.markForCheck();
        }, 1000);
    }
}