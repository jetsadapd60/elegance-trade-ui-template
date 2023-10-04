import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterService } from "src/app/services/router.service";

@Component({
    selector: 'ekyc-page-6',
    template: `
  <div class="wrap px-5 pt-3 pt-xl-5">
        <div class="layout rounded-4 bg-white overflow-hidden d-flex">
          <div class="layout__left ">
            <div class="wrap-hero h-100 rounded-4 d-flex justify-content-center align-items-center">
              <img src="assets/images/e-kyc-logo.svg" class="hero-image w-50" alt="">
            </div>
          </div>
          <div class="layout__right h-100">
            <div class="row w-100">
                <div class="col-12 px-4">
                    
                    <div class="d-flex gap-3 icon-wrap align-items-center">
                        <img class="check-list-icon" src="assets/images/check-conplete.svg" alt="">
                        <h3 class="m-0 p-0 text-primary header-text">การยืนยันตัวตนสำเร็จ</h3>
                    </div>

                    <div class="text-haze ff-kl text-complete">
                        <p class="m-0">การเปิดบัญชีจะสมบูรณ์ </p>
                        <p class="m-0">เมื่อท่านยื่นเอกสารทางบัญชีให้กับทางบริษัทเรียบร้อย </p>
                    </div>
                    <div class="text-haze ff-kl text-complete">
                        <p class="m-0 ps-3">เอกสารที่ต้องเตรียม</p>
                        <p class="m-0">1.เอกสารภาพถ่าย/หน้าสำเนาบัญชีของท่าน</p>
                    </div>
                    <div class=" text-warning ff-kl text-complete pe-5">
                        <p class="m-0">*บัญชีนี้จะเป็นบัญชีหลักที่ใช้ในการทำธุรกรรม ฝาก-ถอน-ชำระเงิน-รับเงิน กับทางบริษัท กรุณาตรวจสอบสถานะของบัญชีก่อนการยื่นเอกสาร</p>
                    </div>

                    <div class="group-btn d-flex justify-content-center gap-4">
                    <button (click)="router.navigation('/')" class="btn ff-kl border rounded text-apple border-apple">ไว้ก่อน</button>
                    <button (click)="router.navigation('/')" class="btn ff-kl btn-apple rounded">ดำเนินการ</button>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>


    
    `,
    styles: [`
    
    .wrap {
        height: calc(100vh - (88px + 60px));
    }
    .wrap-hero {
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
    }
    
    @media (min-width: 992px) {
        .icon-wrap {
            padding: 20px 0px;
            font-size: 20px;
        }

        .check-list-icon {
            width: 40px;
            height: 40px;
        }

        .text-complete {
            font-size: 14px;
            padding: 20px 0px;
        }

        .layout {
            height: 90%;
            max-height: 650px;
            background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
            box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
            &__left, &__right {
                width: 50%;
                /* min-height: 0%; */
            }

            &__right {
                padding-left: 45px;
                padding-top: 28px;
            }
        }

        .header-text {
            font-size: 20px;
            padding-bottom: 30px;
        }

        .id-card-text {
            font-size: 14px;
        }
        
        .list-text {
            font-size: 14px;
            padding-bottom: 30px;
        }

        .group-btn {
            padding-top: 10px;
            width: 100%;
            & .btn {
                width: 100px !important;
                height: 40px;
            }
        }
    }

    @media (min-width: 1200px) {
        .icon-wrap {
            padding: 30px 0px;
            font-size: 30px;
        }

        .check-list-icon {
            width: 61px;
            height: 61px;
        }

        .text-complete {
            font-size: 16px;
            padding: 20px 0px;
        }

        .header-text {
            font-size: 26px;
            padding-top: 50px;
            padding-bottom: 30px;
        }

        .id-card-text {
            font-size: 18px;
        }
        
        .list-text {
            font-size: 16px;
            padding-bottom: 80px;
        }

        .group-btn {
            padding-top: 80px;
            & .btn {
                width: 150px !important;
                height: 40px;
            }
        }
    }
    
    `],
    providers: [RouterService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EkycPage6Component {
    constructor(protected router: RouterService) {}
}