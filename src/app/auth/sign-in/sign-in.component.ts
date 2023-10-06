import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ActivatedRouteModel } from "src/app/base-class/activated-route";

@Component({
    selector: 'app-sign-in',
    template: `
        <div class="container h-100">
            <div class="card border-0 px-md-4">
                <div class="card-boy">
                    <div class="row mt-3">
                        <div class="d-none d-lg-block col-lg-7 col-xl-7 offset-xl-0 shadow-c p-0 rounded-start-5 overflow-hidden left-wrap">
                            <img src="assets/images/image-hero-signin.svg" class="hero-image" alt="">
                        </div>
                        <div class="col-8 offset-2 bg-primary py-xl-5 col-lg-5 offset-lg-0 col-xl-5 shadow-a bg-form text-center right-wrap px-xl-5 py-4">
                            <form class="form " [formGroup]="formSignIn" (ngSubmit)="onSubmitForm()">
                                <div class="">
                                    <img src="assets/images/lhc-brand.svg" alt="">
                                    <img src="assets/images/lhc-logo.svg" alt="">
                                </div>
                                <!-- UserName -->
                                <div>
                                    <div class="form-group text-start mt-3 pt-lg-4" *ngIf="isSignInByMarketing">
                                        <label for="" class="mb-2 text-mauve ff-kl fz-16">ชื่อผู้ใช้งาน</label>
                                        <input formControlName="username" type="text" class="form-control h-54" placeholder="Example@lhc.com">
                                    </div>
                                </div>
                                <!-- Email -->
                                <div>
                                    <div class="form-group text-start mt-3 pt-lg-4" *ngIf="!isSignInByMarketing">
                                        <label for="" class="mb-2 ff-kl text-mauve fz-16">อีเมล </label>
                                        <input formControlName="email" type="email" class="form-control h-54" placeholder="Example@lhc.com">
                                    </div>
                                    <div class="text-start fz-12 text-danger pt-1" *ngIf="emailErrorMessage.length > 0">
                                        <p class="m-0" *ngFor="let message of emailErrorMessage">{{message}}</p>
                                    </div>
                                </div>
                                <!-- Password -->
                                <div class="form-group text-start mt-4">
                                    <label for="" class="mb-2 ff-kl text-mauve fz-16">รหัสผ่าน</label>
                                    <div class="position-relative">
                                        <i role="presentation" *ngIf="showEyeButton" (click)="showPassword = !showPassword" class="bi {{showPassword? 'bi-eye':'bi-eye-slash'}} position-absolute text-mauve top-50 end-0 translate-middle fz-22-5" type="button"></i>
                                        <input formControlName="password" [type]="showPassword ? 'text':'password'" class="form-control h-54" placeholder="********">
                                    </div>
                                </div>
                                <div class="text-end mt-4">
                                    <a href="" class="text-mauve text-decoration-none forget-text">ลืมรหัสผ่าน ?</a>
                                </div>
                                <div class="mt-5">
                                    <button [disabled]="formSignIn.invalid" class="btn btn-apple d-flex align-items-center justify-content-center w-100 btn-lg forget-text">เข้าสู่ระบบ</button>
                                </div>
                                <div class="text-center mt-5">
                                    <a href="" class="text-apple forget-text">สมัครสมาชิก</a>
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
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

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

        button {
            height: 34px;
        }

        .img {
            /* border: 0px 2px solid #000;  */
            /* box-shadow: -1px -1px 0px #FCECC4; */
        }

        .bg-form {
            background: linear-gradient(180deg, var(--color-midday-sun-top) 0%, var(--color-midday-sun-bottom) 100%);
            box-shadow: 0px -1px 0px #FCECC4;
        }

        label {
            font-size: 14px;
        }
        
        .forget-text {
            font-size: 16px;
        }

        @media (min-width: 1200px)  {
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .card-boy {
                /* padding-top: 45px; */
            }

            label {
                font-size: 16px;
            }

            .forget-text {
                font-size: 20px;
            }

            button {
                height: 54px;
            }
        }

    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent extends ActivatedRouteModel implements OnInit, OnDestroy{

    private subscriptions: Subscription[] = [];

    formSignIn: FormGroup;


    /**
     * สถานะ ซ่อน หรือ แสดง รหัสผ่านของ input type password or text
     */
    showPassword    = false;
    showEyeButton   = false;

    /**
     * ชนิดของการล็อคอิน
     ** ระหว่าง User และ Marketing
     ** สำหรับแยกการแสดงผล และ logic ตามชนิดการล็อคอิน
     */
    private signInType: "User" | "Marketing";

    constructor(act: ActivatedRoute, private fb: FormBuilder) {
        super(act);

        
        const { signType } = this.data;
        this.signInType = signType;

        this.formSignIn = this.createForm();
    }

    ngOnInit(): void {
        this.subscribePasswordControl();
    }

    // -------------------------------|| Start Login for USER ||-------------------------------\\

    private signInByUser() {
        console.log('user');
    }

     
    /**
     * The function `emailErrorMessage` returns an array of error messages based on the validation rules for an email input field.
     * ฟังก์ชัน `emailErrorMessage` ส่งคืนอาร์เรย์ของ string แสดงข้อผิดพลาดตามกฎการตรวจสอบสำหรับฟิลด์อินพุตอีเมล
     * @returns An array of error messages related to the email form control.
     */
    get emailErrorMessage(): string[] {
        const message: string[] = [];
        const emailControl = this.getFomrControl('email');
        const { dirty, pristine, touched } = emailControl ?? { dirty: null, pristine: null, touched: null};
        if((touched && !pristine) || dirty) {
            if(emailControl?.hasError('required')) message.push('กรุณากรอกอีเมล');
            if(emailControl?.hasError('pattern')) message.push('รูปแบบอีเมลไม่ถูกต้อง');
        }   
        return message;
    }



    // -------------------------------|| End Login for USER ||-------------------------------\\


    // -------------------------------|| Start Login for CENTRAL ||-------------------------------\\
    private subscribePasswordControl() {
        const passwordControl = this.getFomrControl('password');
        if(passwordControl) {

            const subscription: Subscription = passwordControl
                                                .valueChanges
                                                .subscribe({
                                                    next: () => {
                                                        if(passwordControl?.value !== '') 
                                                            this._showEyeButton = true;
                                                        if(passwordControl?.value === '') 
                                                            this._showEyeButton = false;
                                                    }
                                                })

            this.subscriptions.push(subscription);
        }
    }


    /**
     * ฟังก์ชันจะตรวจสอบว่าแบบฟอร์มถูกต้องหรือไม่ 
     * หาก formSignIn ไม่ถูกต้อง จะไม่รันโค้ดใดๆ 
     * หาก formSignIn ถูกต้อง ฟังก์ชันจะดำเนินการฟังก์ชัน signInBuyMarketing() หรือ signInByUser() 
     * ตามค่าของ isSignInByMarketing
     */
    onSubmitForm() {
        if(this.formSignIn.invalid) return;
        
        if(this.isSignInByMarketing) {
            this.signInBuyMarketing();
        } else {
            this.signInByUser();
        }
    }

            /**
     * The function sets the value of the showEyeButton property.
     * @param {boolean} value - The value parameter is a boolean value that determines whether the eyebutton should be shown or not.
     * ฟังก์ชั่นกำหนดค่าของคุณสมบัติ showEyeButton
     * พารามิเตอร์ value คือค่าบูลีนที่กำหนดว่าควรแสดง ปุ่มตา หรือไม่
     */
    private set _showEyeButton(value: boolean) {
        this.showEyeButton = value;
    }


    /**
     * signInType เป็น Propery แบบ private
     * จึงใช้ getter method ดึงค่าไปเป็นสถานะสำหรับซ่อนหรือแสดงใน template
     */
    get isSignInByMarketing(): boolean {
        return this.signInType === 'Marketing' ? true : false;
    }


    // สำหรับสร้างฟอร์มกรุ๊ป
    private createForm(): FormGroup {
        if(this.isSignInByMarketing) {
            return this.fb.group({
                username: ['', [Validators.required]],
                password: ['', [Validators.required]],
            });
        } else {
            return this.fb.group({
                email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
                password: ['', [Validators.required, Validators.minLength(6)]],
            });

        }
    }

        /**
     * The function returns the form control with the specified name from the formSignIn form group.
     * @param {string} controlName - The controlName parameter is a string that represents the name of
     * a form control in the formSignIn form.
     * @returns The method is returning an instance of `AbstractControl<string, string>` or `null`.
     */
    private getFomrControl(controlName: string): AbstractControl<string, string> | null {
        return this.formSignIn.get(controlName);
    }
    
    // -------------------------------|| End Login for Central ||-------------------------------\\



    // -------------------------------|| Start Login for Marketing ||-------------------------------\\

    private signInBuyMarketing() {
        console.log('marketing', this.formSignIn.value)
    }

    // -------------------------------|| End Login for Marketing ||-------------------------------\\


    ngOnDestroy(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }
    
}