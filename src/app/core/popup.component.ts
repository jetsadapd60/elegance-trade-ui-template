import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { PopupService } from "../services/popup.service";

@Component({
    selector: 'app-popup',
    template: `


    <div class="overay" *ngIf="popupService.popup$()|async as popup">
        <div class="popup">
            <div class="card">
                <div class="card-body">
                    <div class="box">
                        <div class="box__head text-center">
                            <div class="box__icon-wrap">
                                <img src="assets/images/{{popup.type}}-cycle.svg" alt="">
                            </div>
                            <h3 class="text__{{popup.type}} ff-kr mb-0">{{popup.textHead}}</h3>
                        </div>
                        <div class="box__body ff-kl text-center text-dull">
                            <p class="m-0">{{popup.disc}}</p>
                        </div>
                        <div class="box__footer">
                            <!-- <div class="btn btn-primary text-white">ดำเนินการ</div> -->
                            <app-button *ngIf="popup.type === 'complete'" (eventClick)="popup.confirm()" width="200px" height="48px" bgColor="primary">ดำเนินการ</app-button>
                            <app-button *ngIf="popup.type === 'warning'" (eventClick)="popup.confirm()" width="200px" height="48px" bgColor="warning">ดำเนินการ</app-button>
                            <app-button *ngIf="popup.type === 'error'" (eventClick)="popup.confirm()" width="200px" height="48px" bgColor="peri-peri">ดำเนินการ</app-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
    `,
    styles: [
        `
        .text {
            &__complete {
                color: #12C28C !important;
            }
            &__warning {
                color: #F9C112 !important;
            }
            &__error {
                color: #C62C2C !important;
            }
        }

        .popup {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            overflow: hidden;
        }

        .card {
            width: 375px;
            height: 450px;

            position: relative;
            transform: translateY(0px);
            animation: popupMove .3s ;

            border-radius: 20px;
            background: #FFF;
            box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.10);

            &-body {
                padding: 35px 48px;
            }
        }

        @keyframes popupMove {
            from {
                transform: translateY(-50px);
            }

            to {
                transform: translateY(0px);
            }
        }

        .box {
            &__head {
                h3 {
                    padding-top: 28px;
                    font-size: 36px;
                }
            }
            &__body {
                padding-top: 50px;
                font-size: 20px;
            }
            &__footer {
                padding-top: 55px;
                display: flex;
                align-items: right;
                justify-content: center;

                .btn {
                    width: 200px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }
            }
        }

        @media (min-width: 1200px)  {}
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {

    isShow = false;
    icon: 'complete' | 'warning' | 'error' = 'complete';
    textHead: string = 'สำเร็จ';
    description: string = 'การยืนยันหมายเลขโทรศัพท์มือถือของท่านสำเร็จ';

    constructor(public popupService: PopupService) { }

}