import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterService } from "src/app/services/router.service";

@Component({
    template: `
    
        <div class="w-100">

            <div>
                <h3 class="text-warning ffkr head-text">คุณกำลังเข้าสู่ขั้นตอนการยื่นเอกสารบัญชีธนาคาร</h3>
            </div>

            <div class="row">
                <div class="col-10 offset-1 ">
                    <div class="form">
                        <div class="form__group">
                            <div class="form__label text-mist ff-kl">เลือกธนาคาร</div>
                            <select class="px-2 form__select w-100 border text-dull rounded">
                                <option>-- เลือกธนาคาร --</option>
                            </select>
                        </div>
                        <div class="form__group">
                            <div class="form__label text-mist ff-kl">หมายเลขบัญชี</div>
                            <input type="text" name="" placeholder="หมายเลขบัญชีธนาคาร 10 หลัก" id="" class="px-2 form__input w-100 border text-dull rounded">
                        </div>
                        <div class="form__group">
                            <div class="form__label text-mist ff-kl">แนบเอกสาร</div>
                            
                            <div class="d-flex gap-2 align-items-end">
                                <input readonly type="text" name="" disabled value="" id="" class="px-2 w-100 form__input text-dull ff-kl border-dark border-bottom-5 border-top-0 border-end-0 border-start-0">
                                <p class="m-0 text-homeworld ff-kl w-25 text-decoration-underline form__link-text" type="button">เลือกไฟล์</p>
                            </div>
                            <div class="d-flex gap-2 align-items-end">
                                <input readonly type="text" name="" disabled value="" id="" class="px-2 w-100 form__input text-dull ff-kl border-dark border-bottom-5 border-top-0 border-end-0 border-start-0">
                                <p class="m-0 text-homeworld ff-kl w-25 text-decoration-underline form__link-text" type="button">เลือกไฟล์</p>
                            </div>
                            <div class="d-flex gap-2 align-items-end">
                                <input readonly type="text" name="" disabled value="" id="" class="px-2 w-100 form__input text-dull ff-kl border-dark border-bottom-5 border-top-0 border-end-0 border-start-0">
                                <p class="m-0 text-homeworld ff-kl w-25 text-decoration-underline form__link-text" type="button">เลือกไฟล์</p>
                            </div>
                            <span class="text-dull ff-kl">*รองรับไฟล์นามสกุล jpg,png,pdf ขนาดไม่เกิน 3 Mb</span>
                        </div>
                        <div class="form__btn-group d-flex gap-3 justify-content-center text-center">
                            <button (click)="routerService.navigation('/setting')" class="btn border border-apple text-apple ff-kl">ออก</button>
                            <button (click)="routerService.navigation('/bank-account/2')" type="submit" class="btn btn-million-grey text-white ff-kl">ดำเนินการ</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
    
    `,
    styles: [
        `
        
        @media (min-width: 992px) {
            ::placeholder {
                font-size: 14px;
            }
            .head-text {
                font-size: 16px;
            }

            .form {

                &__group {
                    padding-bottom: 12px;
                }

                &__group:nth-child(3) {
                    input {
                        width: 60%;
                    }
                    
                    .form__link-text {
                        width: 20%;
                        font-size: 12px;
                    }

                    span {
                        font-size: 12px;
                        padding-top: 5px;
                    }
                    
                }
                
                &__label {
                    font-size: 16px;
                    padding-bottom: 5px;
                }
                
                &__select {
                    font-size: 14px;
                    height: 40px;
                }
                
                &__input {
                    height: 40px;
                    font-size: 14px;
                }

                &__btn-group {

                    .btn {
                        width: 100px;
                        /* height: 30px; */
                    }
                }

                
            }
        }
        
        @media (min-width: 1200px) {
            ::placeholder {
                font-size: 16px;
            }
            .head-text {
                font-size: 26px;
                padding-bottom: 20px;
            }

            .form {
                &__group {
                    padding-bottom: 15px;
                }

                &__group:nth-child(3) {
                    input {
                        width: 80%;
                        height: 35px;
                    }
                    
                    .form__link-text {
                        width: 20%;
                        font-size: 20px;
                    }

                    span {
                        font-size: 16px;
                        padding-top: 5px;
                        padding-top: 10px;
                        display: block;
                    }
                    
                }
                
                &__label {
                    font-size: 16px;
                    padding-bottom: 5px;
                }
                
                &__select {
                    font-size: 16px;
                    height: 48px;
                }
                
                &__input {
                    height: 48px;
                    font-size: 14px;
                }

                &__btn-group {
                    padding-top: 48px;

                    .btn {
                        width: 172px;
                        /* height: 30px; */
                    }
                }

                
            }
        }
        
        
        `
    ],
    providers: [RouterService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankAccount1Component {
    constructor(protected routerService: RouterService) {}
}