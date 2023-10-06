import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterService } from "src/app/services/router.service";

@Component({
    selector: 'app-ekyc-page-1',
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
                <div class="col-12">
                    <h3 class="text-warning header-text">คุณกำลังเข้าสู่กระบวนการยืนยันตัวตน</h3>
                    <p class="text-homeworld px-0 id-card-text">กรุณาเตรียมบัตรประชาชน</p>
                    <ul class="list-inline text-haze list-text">
                        <li>1.วางบัตร และ รูปหน้าให้อยู่ในกรอบที่กำหนด</li>
                        <li>2.วางบัตรให้เห็น ตัวเลข ตัวอักษร และรูปหน้า ให้เห็นอย่างชัดเจน และภาพต้องไม่เบลอ</li>
                        <li>3.อยู่ในบริเวณที่มีแสงสว่างเพียงพอ และไม่มีแสงสะท้อน จากบัตรประชาชนมารบกวน</li>
                        <li>4.ไม่เอานิ้วมือมาบังบัตรประชาชน</li>
                        <li>5.บัตรประชาชนต้องไม่หมดอายุ</li>
                        <li>6.ข้อมูลบนบัตรประชาชนที่ใช้สแกนจะต้องตรงกับชื่อผู้ใช้บริการที่ลงทะเบียน</li>
                    </ul>
                    <div class="group-btn d-flex justify-content-center gap-4">
                    <button (click)="router.navigation('/setting')" class="btn ff-kl border rounded text-apple border-apple">ออก</button>
                    <button (click)="router.navigation('/e-kyc/2')" class="btn ff-kl btn-apple rounded">ดำเนินการ</button>
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
            padding-top: 20px;
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
export class EkycPage1Component {
    constructor(protected router: RouterService) {}
}