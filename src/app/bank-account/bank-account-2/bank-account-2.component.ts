import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterService } from "src/app/services/router.service";

@Component({
    template: `
    
    <div class="row w-100">
                <div class="col-12 px-4">
                    
                    <div class="d-flex gap-3 icon-wrap align-items-center">
                        <img class="check-list-icon" src="assets/images/check-conplete.svg" alt="">
                        <h3 class="m-0 p-0 text-primary header-text">การยื่นเอกสารสำเร็จ</h3>
                    </div>

                    <div class="text-haze ff-kl text-complete">
                        <p class="m-0">ทางบริษัทจะดำเนินการตรวจสอบเอกสาร </p>
                        <p class="m-0">และอนุมัติบัญชี ภายใน 2 วันทำการ </p>
                    </div>
                    <ul class="text-haze list-inline ff-kl text-complete">
                        <label for="">สอบถามสถานะการส่งเอกสารธนาคาร</label>
                        <li>-เข้าหน้าติดต่อเรา</li>
                        <li>-เลือกหัวข้อ การเปิดบัญชี</li>
                        <li>-กรอกรายละเอียดที่ต้องการสอบถาม</li>
                        <li>-ทางบริษัทจะติดต่อกลับหาท่าน ตามช่องทางที่แจ้งไว้กับบริษัท</li>
                    </ul>

                    <div class="group-btn d-flex justify-content-center gap-4">
                    <button (click)="routerService.navigation('/setting')" class="btn ff-kl border rounded text-apple border-apple">กลับสู่หน้า Profile</button>
                    <button (click)="routerService.navigation('/')" class="btn ff-kl btn-apple rounded">กลับสู่หน้าหลัก</button>
                </div>
                </div>
            </div>
    
    
    `,
    styles: [
        `
        
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
            padding-top: 0px;
            width: 100%;
            & .btn {
                /* width: 150px !important; */
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
        
        
        `
    ],
    providers: [RouterService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankAccount2Component {
    constructor(protected routerService: RouterService) {}
}