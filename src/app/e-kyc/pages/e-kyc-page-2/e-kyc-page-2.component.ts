import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterService } from "src/app/services/router.service";

@Component({
    selector: 'ekyc-page-2',
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
                <div class="wrap-outer bg-white">
                    <h3 class="text-warning  header-text">นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h3>
                    <div class="wrap-inner">
                        <ul class="list-inline bg-white text-haze list-text">
                            <li>บริษัท เล่งหงษ์ คอมโมดิตีส์ จำกัด </li>
                            <li>ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ </li>
                            <li>โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม ใช้ </li>
                            <li>หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ ของเจ้าของข้อมูลส่วนบุคคล </li>
                            <li>ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล</li>
                            <li>การเก็บรวบรวมข้อมูลส่วนบุคคล</li>
                            <li>เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง ดังต่อไปนี้</li>
                            <li>
                                <ul>
                                    <li>การสมัครสมาชิก</li>
                                    <li>โทรศัพท์</li>
                                    <li>อีเมล</li>
                                </ul>
                            </li>
                            <li>ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม</li>
                            <li>ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ เลขประจำตัวประชาชน</li>
                            <li>หนังสือเดินทาง เป็นต้น</li>
                            <li>ข้อมูลการติดต่อ เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น</li>
                            <li>ข้อมูลบัญชี เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น</li>
                            <li>หลักฐานแสดงตัวตน เช่น สำเนาบัตรประจำตัวประชาชน สำเนาหนังสือเดินทาง เป็นต้น</li>
                            <li>ข้อมูลการทำธุรกรรมและการเงิน เช่น ประวัติการสั่งซื้อ รายละเอียดบัตรเครดิต</li>
                            <li>ข้อมูลทางเทคนิค เช่น IP address, Cookie ID, ประวัติการใช้งานเว็บไซต์ (Activity Log) เป็นต้น</li>
                            <li>ข้อมูลอื่น ๆ เช่น รูปภาพ ภาพเคลื่อนไหว </li>
                            <li>และข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล </li>
                        </ul>
                    </div>
                </div>

                <div class="group-btn d-flex justify-content-center gap-4">
                    <button (click)="router.navigation('/')" class="btn ff-kl border rounded text-apple border-apple">ปฏิเสธ</button>
                    <button (click)="router.navigation('/e-kyc/3')" class="btn ff-kl btn-apple rounded">ยินยอม</button>
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
    .layout {
        height: 90%;
        max-height: 650px;
        background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
        
        &__left, &__right {
            width: 50%;
        }
        &__right {
            padding-left: 45px;
            padding-top: 28px;
        }
    }
    
    @media (min-width: 992px) {

        .wrap {
            &-outer {
                height: 45%;
                overflow: hidden;
                padding: 0px 20px 20px;
            }
            &-inner {
                height: 100%;
                overflow: scroll;
                .list-text {
                    font-size: 14px;
                }
            }
        }
        
        .header-text {
            font-size: 20px;
            padding-bottom: 10px;

        }
        
        .group-btn {
            padding-top: 20px;
            width: 100%;
            & .btn {
                width: 100px !important;
                height: 40px;
            }
        }
    }

    @media (min-width: 1200px) {
        
        .wrap {
            &-outer {
                height: 75%;
                padding: 0px 30px 30px;
            }
            &-inner {
                height: 100%;
                .list-text {
                    font-size: 14px;
                    margin-bottom: 30px;
                }
            }
        }
        .header-text {
            font-size: 20px;
            padding-bottom: 30px;

        }
        
        .group-btn {
            padding-top: 40px;
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
export class EkycPage2Component {
    constructor(protected router: RouterService) {}
}