import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BuySellConfirmService } from "src/app/services/buy-sell-confirm.service";

@Component({
    selector: 'app-buy-sell-confirm',
    template: `

    <div class="overay" *ngIf="(buySellConfirmService.modal$|async)">
        <div class="confirm ">
            <div class="confirm__close" (click)="onCloseConfirm()" role="presentation" type="button">
                <span class="ff-mr">X</span>
            </div>
            <div class="confirm__head ">
                <span class="ff-mr">Buy</span>
            </div>
            <div class="confirm__body">
                <h3 class="text-charcoal text-center">กรุณาตรวจสอบรายละเอียดคำสั่งซื้อของคุณ</h3>
                <p class="m-0 ff-kl d-flex justify-content-between">
                    <span>สินค้า</span>
                    <span>ทองคำแท่ง 96.50%</span>
                </p>
                <p class="m-0 ff-kl d-flex justify-content-between">
                    <span>ประเภท</span>
                    <span>Market Price</span>
                </p>
                <p class="m-0 ff-kl d-flex justify-content-between">
                    <span>ราคา</span>
                    <span>32,350</span>
                </p>
                <p class="m-0 ff-kl d-flex justify-content-between">
                    <span>น้ำหนัก</span>
                    <span>1 Bg</span>
                </p>
                <p class="m-0 ff-kl d-flex justify-content-between">
                    <span>มูลค่า</span>
                    <span>32,350</span>
                </p>
            </div>
            <div class="confirm__footer text-end">
                <p class="m-0 text-homeworld ff-kr">ภายใน (5 วินาที)</p>
                <div class="btn btn-primary ff-kr text-white confirm__btn">ยืนยัน</div>
            </div>
        </div>
    </div>
    
    `,
    styles: [
        `
        .confirm {
            width: 400px;
            height: 500px;
            border-radius: 15px;
            margin: auto;
            background: #FFF;
            box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
            /* overflow: hidden; */
            display: flex;
            flex-direction: column;

            position: relative;
            
            &__close {
                position: absolute;
                top: -16px;
                right: -16px;
                width: 40px;
                height: 40px;
                border-radius: 100%;
                background: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;


                border: 3px solid #999;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

                span {
                    font-size: 25px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    color: #999;
                }
            }


            &__head {
                height: 70px;
                width: 100%;
                background: #12C28C;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                color: #ffffff;
                border-radius: 15px 15px 0px 0px;


            }

            &__body {
                flex: 1;
                padding: 16px 35px;

                h3 {
                    font-size: 19px;
                    padding: 25px 0px;
                }

                p {
                    font-size: 16px;
                    padding-bottom: 10px;
                }
            }

            &__footer {
                width: 100%;
                height: 125px;
                padding: 5px 35px 0px;
                border-top: 1px solid #D9D9D9;
                font-size: 20px;

                p {
                    font-size: 16px;
                }
            }

            &__btn {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                margin-top: 20px;
            }
        }

        @media (min-width: 1200px) {
            .confirm {
                width: 500px;
                height: 600px;
            
            &__close {
                top: -20px;
                right: -20px;
                width: 60px;
                height: 60px;

                span {
                    font-size: 36px;
                    color: #999;
                }
            }


            &__head {
                height: 100px;
                width: 100%;
                font-size: 36px;


            }

            &__body {
                /* padding: 15px 25px; */

                h3 {
                    font-size: 24px;
                    padding-bottom: 58px;
                }

                p {
                    font-size: 20px;
                }
            }

            &__footer {
                width: 100%;
                height: 142px;
                /* padding: 17px 22px 22px; */
                font-size: 20px;
            }

            &__btn {
                width: 100%;
                height: 54px;
                font-size: 20px;
                margin-top: 20px;
            }
        }
        }

        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuySellConfirmComponent {

    constructor(public buySellConfirmService: BuySellConfirmService) {
        this.buySellConfirmService.modal$.subscribe(i=>console.log('------', i))
    }

    onCloseConfirm() {
        this.buySellConfirmService.close();
    }

 }