import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterService } from "src/app/services/router.service";

@Component({
    selector: 'ekyc-page-3',
    template: `
    
    <div class="wrap px-5 pt-3 pt-xl-5">
        <div class="layout rounded-4 bg-white overflow-hidden d-flex">
            <div class="layout__left ">
                <h3 class="text-warning ff-kr header-text">การถ่ายภาพบัตรประชาชน</h3>
                <p class="text-homeworld px-0 ff-kr id-card-text">กรุณาเตรียมบัตรประชาชน</p>
                <ul class="list-inline text-haze ff-kr list-text">
                        <li>1.วางบัตร และ รูปหน้าให้อยู่ในกรอบที่กำหนด</li>
                        <li>2.วางบัตรให้เห็น ตัวเลข ตัวอักษร และรูปหน้า ให้เห็นอย่างชัดเจน และภาพต้องไม่เบลอ</li>
                        <li>3.อยู่ในบริเวณที่มีแสงสว่างเพียงพอ และไม่มีแสงสะท้อน จากบัตรประชาชนมารบกวน</li>
                        <li>4.ไม่เอานิ้วมือมาบังบัตรประชาชน</li>
                        <li>5.บัตรประชาชนต้องไม่หมดอายุ</li>
                        <li>6.ข้อมูลบนบัตรประชาชนที่ใช้สแกนจะต้องตรงกับชื่อผู้ใช้บริการที่ลงทะเบียน</li>
                </ul>

                <p class="text-danger warning-text ff-kl">*หากอุปกรณ์ของท่านไม่ได้เชื่อมต่อกับกล้อง กรุณา Download Application บนอุปกรณ์ มือถือ/แทปเล็ท เพื่อเข้าสู่กระบวนการยืนยันตัวตนอีกครั้ง</p>
            </div>
        <div class="layout__right h-100">
                <div class="wrap-hero h-100 text-center rounded-4">
                    <div class="camera border rounded-3 bg-secondary rounded-xl-4"></div>
                    <div class="capture-btn w-100 ">
                        <img class="image" src="assets/images/capture-icon.svg" alt=""> <br>
                        <span class="text-dull ff-kl">ถ่ายภาพ</span>
                    </div>
                    <div class="group-btn  d-flex justify-content-center gap-4">
                        <button class="btn ff-kl border rounded text-apple border-apple">ถ่ายใหม่</button>
                        <button (click)="router.navigation('/e-kyc/4')" class="btn ff-kl btn-apple rounded">ยืนยัน</button>
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
        border-radius: 20px;
        background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
    }
    .layout {
        height: 90%;
        max-height: 650px;
        background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
        &__left, &__right {
            width: 50%;
        }
        &__right {

        }
    }
    
    @media (min-width: 992px) {

        .wrap-hero {
            padding: 57px 
        }

        .layout {
            &__left {
                padding: 57px 
            }
        }

        .header-text {
            font-size: 20px;
        }

        .id-card-text {
            font-size: 15px;
        }

        .list-textv {
            font-size: 14px;
        }

        .warning-text {
            font-size: 14px;
        }

        .camera {
            width: 100%;
            height: 150px;
        }

        .capture-btn {
            padding-top: 47px;
            font-size: 16px;
        }

        .group-btn {
            padding-top: 35px;
            width: 100%;
            & .btn {
                width: 120px !important;
                height: 40px;
            }
        }

    }

    @media (min-width: 1200px) {

        .layout {
            &__left {
                padding: 97px 
            }
        }

        .header-text {
            font-size: 26px;
        }

        .id-card-text {
            font-size: 18px;
        }

        .list-textv {
            font-size: 16px;
        }

        .warning-text {
            font-size: 16px;
            padding-top: 80px;
        }

        .camera {
            width: 100%;
            height: 281px;
        }

        .capture-btn {
            padding-top: 47px;
            font-size: 20px;
        }

        .group-btn {
            padding-top: 60px;
            width: 100%;
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
export class EkycPage3Component {
    constructor(protected router: RouterService) {}
}