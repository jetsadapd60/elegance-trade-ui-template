import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-sign-in',
    template: `
        <div class="container h-100" style="height: ;">
            <div class="card border-0 px-md-4">
                <div class="card-boy">
                    <div class="row mt-3 mt-lg-3">
                        <div class="d-none d-lg-block col-lg-7 col-xl-7 offset-xl-0 shadow-c p-0 rounded-start-5 overflow-hidden left-wrap">
                            <img src="assets/images/image-hero-signin.svg" class="hero-image" alt="">
                        </div>
                        <div class="col-8 offset-2 col-lg-5 offset-lg-0 col-xl-5 shadow-a bg-form text-center right-wrap px-xl-5 py-4">
                            <form class="form">
                                <div class="">
                                    <img src="assets/images/lhc-brand.svg" alt="">
                                    <img src="assets/images/lhc-logo.svg" alt="">
                                </div>
                                <h3 class="text-apple mb-0 mt-5">เข้าสู่ระบบ</h3>
                                <div class="form-group text-start mt-3 pt-lg-4">
                                    <label for="" class="mb-2 ff-kl fz-16">อีเมล</label>
                                    <input type="email" class="form-control h-54" placeholder="Example@lhc.com">
                                </div>
                                <div class="form-group text-start mt-4">
                                    <label for="" class="mb-2 ff-kl fz-16">รหัสผ่าน</label>
                                    <div class="position-relative">
                                        <i (click)="showPassword = !showPassword" class="bi {{showPassword? 'bi-eye':'bi-eye-slash'}} position-absolute text-mauve top-50 end-0 translate-middle fz-22-5" type="button"></i>
                                        <input [type]="showPassword ? 'text':'password'" class="form-control h-54" placeholder="********">
                                    </div>
                                </div>
                                <div class="text-end mt-4">
                                    <a href="" class="text-mauve text-decoration-none">ลืมรหัสผ่าน ?</a>
                                </div>
                                <div class="mt-5">
                                    <button class="btn btn-apple w-100 btn-lg">เข้าสู่ระบบ</button>
                                </div>
                                <div class="text-center mt-5">
                                    <a href="" class="text-apple">สมัครสมาชิก</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col text-center text-info">
                            <span class="pt-5 pt-xxl-0 d-block" style="color: #988182; font-size: 1rem">@Copyright Elegance. All Rights Reserved Designed by Elegance team</span>
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- <img src="assets/images/bubble.svg" alt=""> -->
        </div>
    `,
    styles: [`
        /* :host {
            display        : flex;
            align-items    : center;
            justify-content: center;
            background     : linear-gradient(180deg, var(--color-brown-top) 0%, var(--color-brown-bottom) 100%);
            width          : 100%;
            height         : 100%;
        } */
        .left-wrap {
            height: auto;
            max-height: 700px;
        }

        .right-wrap {
            height: auto;
            max-height: 700px;
        }

        .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover; 
        }

        input::placeholder {
            font-size  : 20px;
            color      : #BABAD1;
            font-family: "Kanit-Light";
        }

        .card {
            background  : transparent;
        }

        .shadow-c {
            box-shadow   : -0px -1px 0px #FCECC4;
            border-left  : 1px solid #000;
            border-bottom: 1px solid #000;
        }

        .shadow-a {
            box-shadow: 10px 4px 30px #410608 ;
        }

        .img {
            /* border: 0px 2px solid #000;  */
            /* box-shadow: -1px -1px 0px #FCECC4; */
        }

        .bg-form {
            background: linear-gradient(180deg, var(--color-midday-sun-top) 0%, var(--color-midday-sun-bottom) 100%);
            box-shadow: 0px -1px 0px #FCECC4;
        }

    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {

    showPassword = false;
}