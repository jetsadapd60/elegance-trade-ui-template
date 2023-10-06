import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterService } from "src/app/services/router.service";

@Component({
    selector: 'app-ekyc-page-4',
    template: `
    
    <div class="wrap px-5 pt-3 pt-xl-5">
        <div class="layout rounded-4 bg-white overflow-hidden">
            <div class="d-flex">
                <div class="layout__left">
                    <h3 class="text-homeworld header-text header-text">นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h3>
                    <div class="d-flex h-100 justify-content-center text-center">
                        <img src="assets/images/e-kyc-logo.svg" class="hero-image" alt="">
                    </div>
                </div>
                <div class="layout__right h-100">
                    <h3 class="text-warning header-text ff-kl">ข้อมูลส่วนตัว</h3>
                    <form class="form w-100">
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">คำนำหน้าชื่อ</label>
                            <input type="text" placeholder="นาย" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">ชื่อ</label>
                            <input type="text" placeholder="Langhong " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">นามสกุล</label>
                            <input type="text" placeholder="Trading " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">หมายเลขบัตรประชาชน</label>
                            <input type="text" placeholder="1234567890123 " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">วัน/เดือน/ปีเกิด</label>
                            <input type="text" placeholder="DD/MM/YYYY " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                    </form>
                </div>
            </div>

            <hr>

            <div class="d-flex">
                <div class="layout__left"></div>
                <div class="layout__right h-100">
                    <h3 class="text-warning header-text ff-kl">ข้อมูลที่อยู่</h3>
                    <form class="form w-100">
                        <div class="row">
                            <div class="col-6 ">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">เลขที่</label>
                                    <input type="text" placeholder="99" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                            <div class="col-6 ">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">หมู่</label>
                                    <input type="text" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">อาคาร / หมู่บ้าน</label>
                                    <input type="text" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">ชั้น /ห้อง</label>
                                    <input type="text" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">ซอย</label>
                                    <input type="text" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">ถนน</label>
                                    <input type="text" placeholder="บรมราชชนนี" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">จังหวัด</label>
                            <input type="text" placeholder="กรุุงเทพมหานคร " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">เขต / อำเภอ</label>
                            <input type="text" placeholder="บางพลัด " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">แขวง / ตำบล</label>
                            <input type="text" placeholder="บางบำหรุ " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">รหัสไปรษณีย์</label>
                            <input type="text" placeholder="10700" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                    </form>
                </div>
            </div>

            <div class="d-flex">
                <div class="layout__left"></div>
                <div class="layout__right h-100">
                    <div class="slider-wrap d-flex gap-3 align-items-center">
                        <switches></switches> <span class="text-mist text-switch ff-kl">ที่อยู่จัดส่งเอกสารไม่ตรงกับบัตรประชาชน</span>
                    </div>
                </div>
            </div>

            <div class="d-flex">
                <div class="layout__left"></div>
                <div class="layout__right h-100">
                    <h3 class="text-warning ff-kl header-text">ข้อมูลที่อยู่จัดส่งเอกสาร</h3>
                    <form class="form w-100">
                        <div class="row">
                            <div class="col-6 ">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">เลขที่</label>
                                    <input type="text" placeholder="99" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                            <div class="col-6 ">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">หมู่</label>
                                    <input type="text" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">อาคาร / หมู่บ้าน</label>
                                    <input type="text" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">ชั้น /ห้อง</label>
                                    <input type="text" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">ซอย</label>
                                    <input type="text" placeholder="" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form__group">
                                    <label class="form__label text-mist ff-kl" for="">ถนน</label>
                                    <input type="text" placeholder="บรมราชชนนี" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">จังหวัด</label>
                            <input type="text" placeholder="กรุุงเทพมหานคร " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">เขต / อำเภอ</label>
                            <input type="text" placeholder="บางพลัด " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">แขวง / ตำบล</label>
                            <input type="text" placeholder="บางบำหรุ " class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                        <div class="form__group">
                            <label class="form__label text-mist ff-kl" for="">รหัสไปรษณีย์</label>
                            <input type="text" placeholder="10700" class="form__control w-100 text-wolf border rounded ff-kl py-2 px-3">
                        </div>
                    </form>
                </div>
            </div>

            <div class="d-flex">
                <div class="layout__left"></div>
                <div class="layout__right py-0 h-100">
                    <div class="group-btn  d-flex justify-content-end gap-4">
                        <button (click)="router.navigation('/e-kyc/5')" class="btn ff-kl btn-apple rounded">ยืนยัน</button>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    
    `,
    styles: [`
    
    .wrap {
        min-height: calc(100vh - (88px + 60px));
        /* height: 100%; */
    }
    
    .wrap-hero {
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
    }
    .layout {
        height: 100%;
        /* max-height: 650px; */
        background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);

        &__left, &__right {
            width: 50%;
        }
        
        &__left {
            padding: 45px;
        }

        &__right {
            padding: 45px 10px 45px 10px;
        }
    }
    
    @media (min-width: 992px) {

        .header-text {
            font-size: 20px;
            padding-bottom: 10px;

        }

        .group-btn {
            padding-top: 20px;
            width: 100%;
            & .btn {
                width: 180px !important;
                height: 40px;
            }
        }

        .form {
            &__group {
                padding-top: 20px;
            }

            &__label {
                font-size: 16px;
                padding-bottom: 8px;
            }

            &__control {
                height: 40px;
                font-size: 14px;
            }
        }

        .text-switch {
            font-size: 18px;
        }
    }

    @media (min-width: 1200px) {
        .layout {

            &__left, &__right {
                width: 50%;
            }
            
            &__left {
                padding: 45px;
            }

            &__right {
                padding: 45px 80px 45px 45px;
            }
        }

        .header-text {
            font-size: 26px;
            padding-bottom: 30px;

        }
        
        .group-btn {
            padding-top: 0px;
            & .btn {
                width: 221px !important;
                height: 40px;
            }
        }


        .form {
            &__group {
                padding-top: 28px;
            }

            &__label {
                font-size: 20px;
                padding-bottom: 12px;
            }

            &__control {
                height: 48px;
                font-size: 18px;
            }
        }

        .text-switch {
            font-size: 24px;
        }
    }
    
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EkycPage4Component {
    constructor(protected router: RouterService) {}
}