import { ChangeDetectionStrategy, Component,  } from "@angular/core";
import { Observable,  } from "rxjs";
import { Modal } from "src/app/models/modal.model";
import { ModalService } from "src/app/services/modal.service";

@Component({
    selector: 'app-modal',
    template: `
        <!-- *ngIf="modalData|async as modal" -->
        <div class="overay" *ngIf="modalData|async as modal"> 
            <div class="modall">
                <div (click)="onClose()" role="presentation" class="modall__close" type="button">
                    <span class="ff-mr">X</span>
                </div>
                <div class="modall__head">
                    <img class="modall__icon" src="assets/images/check-cycle.svg" alt="">
                </div>
                <div class="modall__body text-center">
                    <h3 *ngIf="modal.modalType.complete" class="text-primary modall__text-head ff-kr">สำเร็จ</h3>
                    <h3 *ngIf="0" class="text-primary modall__text-head ff-kr">ไม่สำเร็จ!</h3>
                    <h3 *ngIf="0" class="text-primary modall__text-head ff-kr">กรุณากรอก PIN !</h3>
                    <div class="modall__content px-5 ">
                        <!-- Complete Buy -->
                        <p *ngIf="0" class="m-0 text-dull ff-km modall__text-detail">การส่งคำสั่ง <span class="text-primary">ซื้อ</span> ของคุณสำเร็จ</p>
                        <!-- Complete Sell -->
                        <p *ngIf="0" class="m-0 text-dull ff-km modall__text-detail">การส่งคำสั่ง <span class="text-danger">ขาย</span> ของคุณสำเร็จ</p>
                        <!-- Complete Withdow -->
                        <div *ngIf="0">
                            <p class="m-0 text-dull ff-km modall__text-detail">การส่งคำสั่ง ถอนทองคำแท่ง<span class="text-danger">96.50%</span> จำนวน <span class="text-homeworld">10</span> Bg ของคุณสำเร็จรอการอนุมัติจากเจ้าหน้าที่</p>
                            <p class="m-0 pt-3 text-dull ff-kr modall__text-detail">รหัสคำสั่ง <span>WD9623009040004</span> คุณสามารถรับทองคำภายใน 2 วันทำการ (T+2)</p>
                        </div>
                        <!-- Complete Clearing -->
                        <div *ngIf="1">
                            <p class="m-0 text-dull ff-km modall__text-detail">การส่งคำสั่ง <span class="text-warning">เคลียร์ริ่ง</span> ของคุณสำเร็จ</p>
                            <div class="m-0 text-dull ff-kr modall__text-detail pt-4">
                                <p class="m-0">รหัสคำสั่ง R2309-00900</p>
                                <p class="m-0">จำนวนเงิน 65,000บาท</div>
                        </div>


                        <!-- Error Buy -->
                        <p *ngIf="0" class="m-0 text-dull ff-km modall__text-detail">การส่งคำสั่ง <span class="text-primary">ซื้อ</span> ของคุณไม่สำเร็จ เนื่องจากมีการเปลี่ยนแปลงของราคา</p>
                        <!-- Error Sell -->
                        <p *ngIf="0" class="m-0 text-dull ff-km modall__text-detail">การส่งคำสั่ง <span class="text-danger">ขาย</span> ของคุณไม่สำเร็จเนื่องจากมีการเปลี่ยนแปลงของราคา</p>

                        <!-- Wraning network -->
                        <p *ngIf="0" class="m-0 text-dull ff-km modall__text-detail">กรุณาตรวจสอบการเชื่อมต่อเครื่อข่ายสัญญาณ Internet ของท่าน</p>
                    </div>
                </div>
                <div class="text-dull ff-mr modall__footer d-flex gap-1 justify-content-center align-items-center">
                    <div *ngIf="0">
                        <span>{{_date|date:'dd/MMM/yyyy'}}</span>
                        <span>{{_date|date:'hh/mm/ss'}}</span>
                    </div>
                    <div class="w-100 pt-3" *ngIf="1">
                        <app-button (eventClick)="btnClick($event)" fontFamily="kr" width="100%" height="54px">คลิกเพื่อดู  QR Code สำหรับชำระเงิน</app-button>
                        <p class="text-danger pt-3 modall__text-clearing text-center">*กระบวนการชำระเงินจะสมบูรณ์ <br> เมื่อลูกค้าชำระเงินผ่าน QR Code ที่ได้รับ</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
        .modall {
            width: 400px;
            height: auto;
            /* max-height: 320px; */
            margin: auto;
            background: #ffffff;
            border-radius: 15px;
            display: flex;
            flex-direction: column;

            position: relative;
            
            &__close {
                position: absolute;
                z-index: 1;
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
                position: relative;
                width: 100%;
                height: 80px;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                background: #C8C8C8;
            }

            &__icon {
                position: absolute;
                bottom: -40px;
                left: 50%;
                transform: translateX(-50%);

                width: 80px;
                height: 80px;
            }

            &__body {
                padding-top: 50px;
                /* height: auto; */
                flex: 1;
            }

            &__text-head {
                font-size: 28px;
            }

            &__text-detail {
                font-size: 18px;
            }

            &__content {
                font-size: 18px;
            }

            &__footer {
                width: 100%;
                height: auto;
                padding: 20px 30px;
            }

            &__text-clearing {
                font-size: 14px;
            }
        }


        @media (min-width: 1200px) {
            .modall { 
                width: 500px;
            
            &__close {
                top: -20px;
                right: -20px;
                width: 60px;
                height: 60px;

                span {
                    font-size: 25px;
                }
            }
            
            &__head {
                height: 100px;
            }

            &__icon {
                width: 100px;
                height: 100px;
            }

            &__body {
            }

            &__text-head {
                font-size: 36px;
            }

            &__text-detail {
                font-size: 18px;
            }

            &__content {
                font-size: 24px;
            }

            &__footer {
                font-size: 16px;
                padding: 30px 48px;
            }

            &__text-clearing {
                font-size: 18px;
            }
        }
        }
        
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
    modalData: Observable<Modal|undefined>;
    // private subscription: Subscription;

    constructor(private modalService: ModalService) {

        /* The line `this.subscription = this.modalService.modal$.subscribe({ next: this.next })` is
        subscribing to the `modal$` observable provided by the `modalService`. It sets up a
        subscription to listen for changes emitted by the observable. When a new value is emitted,
        the `next` function is called with that value. In this case, the `next` function assigns the
        emitted value to the `modalData` property of the component. */
        this.modalData = this.modalService.modal$;
    }

    /**
     * The function "next" assigns a value to the "modalData" property if the "modal" parameter is defined.
     * @param {Modal|undefined} modal - The `modal` parameter is of type `Modal` or `undefined`.
     */
    // private next(modal: Modal|undefined) {
    //     if(modal) {
    //         this.modalData = modal;
    //     }
    // }

    /**
     * The function returns the current date and time as a Date object.
     * @returns A new Date object is being returned.
     */
    get _date(): Date {
        return new Date();
    }

    /**
     * The close function closes a modal by calling the close method of the modalService.
     */
    onClose() {
        this.modalService.close();
    }

    btnClick(event: MouseEvent) {
        console.log(event);
    }
}