import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterService } from "src/app/services/router.service";

@Component({
    selector: 'ekyc-page-5',
    template: `
    
    <div class="wrap px-5 pt-3 pt-xl-5">
        <div class="row rounded-4 bg-white overflow-hidden d-flex">
            <div class="col-3 d-flex flex-column justify-content-center">
                <p class="text-homeworld px-0 ff-kr id-card-text">ขั้นตอนการถ่ายภาพ</p>
                <ol class="text-haze ps-3 ff-kr list-text">
                    <li>หันใบหน้าให้อยู่ในกรอบที่กำหนด</li>
                    <li>หันใบหน้าให้เห็นอย่างชัดเจน และภาพต้องไม่เบลอ</li>
                    <li>อยู่ในบริเวณที่มีแสงสว่างเพียงพอ และไม่มีแสงสะท้อน</li>
                    <li>กดปุ่มถ่ายภาพ</li>
                    <li>เมื่อได้ภาพที่ต้องการ ให้กดปุ่มยืนยัน</li>
                </ol>
            </div>
            <div class="col-6 h-100 text-center">
                <h3 class="text-warning head-text ff-kl">กรุณาหมุนใบหน้าของท่านให้ตรงกับกรอบที่กำหนด</h3>
                <div class="wrap-hero d-flex flex-column align-items-center">
                    <div class="camera rounded-4 bg-secondary"></div>
                    <div class="group-btn  d-flex justify-content-center gap-4">
                        <button class="btn ff-kl border rounded text-apple border-apple">ถ่ายใหม่</button>
                        <button (click)="router.navigation('/e-kyc/6')" class="btn ff-kl btn-apple rounded">ยืนยัน</button>
                    </div>
                </div>
            </div>
            <div class="col-3 d-flex align-items-center justify-content-center">
                <div class="capture-btn">
                    <img class="image" src="assets/images/capture-icon.svg" alt=""> <br>
                    <span class="text-dull ff-kl">ถ่ายภาพ</span>
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
    }

    .layout {
        height: 90%;
        max-height: 650px;
        background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
        &__left, &__right {
            width: 50%;
        }
        &__right {

        }
    }
    
    @media (min-width: 992px) {

        .row {
            padding: 20px;
            height: 90%;
        }

        .wrap-hero {
            padding: 0px;
        }

        .layout {
            &__left {
                padding: 57px 
            }
        }

        .head-text {
            font-size: 18px;
            padding: 10px 0px;
        }

        .id-card-text {
            font-size: 15px;
        }

        .list-text {
            font-size: 14px;
        }

        .warning-text {
            font-size: 14px;
        }

        .camera {
            width: 350px;
            height: 250px;
        }

        .capture-btn {
            /* padding-top: 47px; */
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

        .row {
            padding: 20px;
            height: 650px;
        }

        .layout {
            &__left {
                padding: 97px 
            }
        }

        .head-text {
            font-size: 26px;
            padding: 20px 0px;
        }

        .id-card-text {
            font-size: 18px;
        }

        .list-text {
            font-size: 16px;
        }

        .warning-text {
            font-size: 16px;
            padding-top: 80px;
        }

        .camera {
            width: 500px;
            height: 383px;
        }

        .capture-btn {
            /* padding-top: 47px; */
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
export class EkycPage5Component {
    constructor(protected router: RouterService) {}
}