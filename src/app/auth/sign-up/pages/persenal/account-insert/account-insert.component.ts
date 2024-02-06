import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BaseComponent } from 'src/app/base-class/base.component';
import { CompanyType } from 'src/app/models/company-type.model';
import { PersonType, UserStorage } from 'src/app/models/enum';
import { PersonalRegisterRequired, PersonalRegisterRespons } from 'src/app/models/personal-register.model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyTypeService } from 'src/app/services/company-type.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PopupService } from 'src/app/services/popup.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-account-insert',
  template: `

      <h3 class="head-text ff-kr text-apple py-lg-4 py-md-3" *ngIf="page === 'personal'">สร้างบัญชีบุคคลธรรมดา</h3>
      <h3 class="head-text ff-kr text-apple py-lg-4 py-md-3" *ngIf="page === 'corporate'">สร้างบัญชีนิติบุคคล</h3>
      <div class="row ">
        <div class="col-10 offset-1 col-xl-8 offset-xl-1 p-0 s">
          <form class="form" [formGroup]="registerForm" (ngSubmit)="submitForm($event)">

          <!-------------------------- สำหรับ Personal -------------------------->
            <ng-container *ngIf="page === 'personal'; else corporate">
              <!-- Email -->
              <div class="form-group ">
                <label for="" class="text-mauve ff-kl">อีเมล</label>
                <input formControlName="email" type="email" class="form-control w-100">
                <div class="text-center fz-12 text-danger pt-1" *ngIf="emailErrorMessage.length > 0">
                    <p class="m-0" *ngFor="let message of emailErrorMessage">{{message}}</p>
                </div>
              </div>

              <!-- Password -->
              <div class="form-group pt-4">
                <div class="d-flex justify-content-between align-items-center">
                  <label for="" class="text-mauve ff-kl">รหัสผ่าน</label>
                  <p class="mb-0 text-orange ff-kl">การตั้งรหัสผ่าน <i class="bi bi-info-circle"></i></p>
                </div>
                <div class="wrap-password">
                  <input formControlName="password" type="{{isShowPassword?'text':'password'}}" class="form-control w-100">
                  <i *ngIf="isShowEyePassword" class="bi eye bi-eye{{isShowPassword?'':'-slash'}}" type="button" (click)="isShowPassword = !isShowPassword"></i>
                </div>
                <div class="text-center fz-12 text-danger pt-1" *ngIf="passwordErrorMessage.length > 0">
                    <p class="m-0" *ngFor="let message of passwordErrorMessage">{{message}}</p>
                </div>
              </div>

              <!-- Confirm Password -->
              <div class="form-group pt-4">
                <div class="d-flex justify-content-between align-items-center">
                  <label for="" class="text-mauve ff-kl">ยืนยันรหัสผ่าน</label>
                  <!-- <p class="mb-0 text-orange ff-kl">การตั้งรหัสผ่าน <i class="bi bi-info-circle"></i></p> -->
                </div>
                <div class="wrap-password">
                  <input formControlName="confirmPassword" type="{{isShowConfirmPassword?'text':'password'}}" class="form-control">
                  <i *ngIf="isShowEyeConfirmPassword" class="bi eye bi-eye{{isShowConfirmPassword?'':'-slash'}}" type="button" (click)="isShowConfirmPassword = !isShowConfirmPassword"></i>
                </div>
                <div class="text-center fz-12 text-danger pt-1" *ngIf="confirmPasswordErrorMessage.length > 0">
                    <p class="m-0" *ngFor="let message of confirmPasswordErrorMessage">{{message}}</p>
                </div>
                <!-- <div class="text-start fz-12 text-danger pt-1" *ngIf="registerForm.hasError('mismatch')">
                  รหัสผ่านไม่ตรงกัน
                </div> -->
              </div>
            </ng-container>


            <!--------------------------- สำหรับ Corporate --------------------------->
            <ng-template #corporate>  

              <div class="form-group ">
                <label for="shop-name" class="text-mauve ff-kl">ชื่อบริษัท-ชื่อร้าน</label>
                <input formControlName="shopName" type="text" id="shop-name" class="form-control">
              </div>

              <div class="form-group pt-4 d-flex flex-column">
                <label for="shop-name" class="text-mauve ff-kl">ประเภทกิจการ</label>
                <select name="" id="" formControlName="businessType" class="form-control px-3  text-mauve">
                  <option id="" value="" selected>-- เลือก --</option>
                  <option *ngFor="let type of companyType$|async" [value]="type.pK_SyCPTy">{{type.name}}</option>
                  <!-- <option id="" value="">2</option>
                  <option id="" value="">3</option> -->
                </select>
              </div>

              <div class="form-group pt-4">
                <label for="contact-name" class="text-mauve ff-kl">ชื่อผู้ติดต่อ</label>
                <input formControlName="contactName" type="text" id="contact-name" class="form-control">
              </div>

            </ng-template>


            <div class="form-group pt-4">
                <div class="form-group ">
                  <label for="" class="text-mauve ff-kl">เบอร์โทรศัพท์</label>
                  <input [value]="getFomrControl('phoneNumber')?.value | phoneFormat" placeholder="ex. 091-123-4567" formControlName="phoneNumber" type="text" class="form-control">
                </div>
                <div class="text-center fz-12 text-danger pt-1" *ngIf="phoneNumberErrorMessage.length > 0">
                    <p class="m-0" *ngFor="let message of phoneNumberErrorMessage">{{message}}</p>
                </div>
              </div>
              <div class="form-group pt-4">
                <div class="form-group text-center">
                  <button [disabled]="registerForm.invalid || btnDisable" type="submit" class="btn btn-apple ff-kl" >ถัดไป</button>
                </div>
              </div>
              <!-- <div>
                <p>p:: {{getFomrControl('phoneNumber')?.errors|json}}</p>
              </div> -->
          </form>
        </div>
      </div>



  `,
  styles: [`

    .wrap-password {
      position: relative;

      .eye {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
      }
    }

    
       /* Large devices (desktops, 992px and up) */
      @media (min-width: 992px) { 
        input, select {
          height: 47px;
        }

        label, label + p {
          font-size: 14px;
        }
        .btn-apple {
          width: 120px;
          font-size: 18px;
        }
        .head-text {
          font-size: 20px;
        }
       }

       /* X-Large devices (large desktops, 1200px and up) */
      @media (min-width: 1200px) { 
        form {
          width: 100%;
        }

        input, select {
          width: 100%;
          height: 54px;
        }

        label, label + p {
          font-size: 16px;
        }

        .btn-apple {
          width: 170px;
          font-size: 20px;
        }
        .head-text {
          font-size: 24px;
        }

       }
  
  `],
  providers: [CompanyTypeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountInsertComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  companyType$: Observable<CompanyType[]> = new Observable<CompanyType[]>();

  registerForm!: FormGroup;
  isShowPassword = false;
  isShowConfirmPassword = false;
  btnDisable = false;

  constructor(
    override router           : Router,
    override atr              : ActivatedRoute,
    private fd                : FormBuilder,
    private authService       : AuthService,
    private popupService      : PopupService,
    private spinnerService    : SpinnerService,
    private ref               : ChangeDetectorRef,
    private storeService      : LocalStorageService,
    private companyTypeService: CompanyTypeService,
    ) {
    super(router, atr);

    if (this.page === PersonType.PERSONAL) this.builderPersonalForm();
    if (this.page === PersonType.CORPORATE) this.builderCorporateForm();
    if(this.page === 'corporate') {
      this.companyType$ = this.companyTypeService.companyType();
    }
  }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    const observer = this.registerForm
      .get('phoneNumber')
      ?.valueChanges
      .subscribe((value) => {
        if (value) {
          value = value.replace(/[^0-9]/g, '').slice(0, 10);
          this.registerForm.get('phoneNumber')?.setValue(value, { emitEvent: false });
        }
      });

    if (observer) {
      this.subscriptions.push(observer);
    }
  }

  submitForm(e: Event) {

    this.spinnerService.open();

    if (this.page === PersonType.PERSONAL) this.personalRegister();
    //   this.navigation('mobile-otp', this.page); 
    if(this.page === PersonType.CORPORATE) this.corporateRegister();
    //   this.navigation('mobile-otp', this.page); 
  }

  private personalRegister() {
    this.btnDisable = true;
    const next = (res: PersonalRegisterRespons) => {
      console.log('Personal register ---<>', res);
      if (res && res.status) {
        const { accID, phoneNumber } = res.data;
        this.storeService.setItem(UserStorage.USER_PHONE_NUMBER, phoneNumber);
        this.storeService.setItem(UserStorage.USER_ACC_ID, accID);
        this.navigation('mobile-otp', this.page);
      }

      if (res && !res.status) {
        this.popupService
          .open({
            type: 'error',
            icon: 'error',
            textHead: 'ไม่สำเร็จ',
            disc: res.message,
            btnLabel: 'ดำเนินการต่อ',
            confirm: () => {
              console.log('test')
              this.btnDisable = false;
              this.ref.markForCheck();
            },
          })
      }
    }

    const error = (err: unknown) => { }
    const complete = () => this.spinnerService.close();

    const observer = this.authService
      .personalRegister(this.registerForm.value as PersonalRegisterRequired)
      .subscribe({ next, error, complete });


    this.subscriptions.push(observer);
  }

  private builderPersonalForm() {
    this.registerForm = this.fd.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z0-9$@!%*.&]).{6,}$')]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      countryCode: ['TH'],
      chkPolicy: [true],
      memberType: ['P'],
      registerSource: ['Desktop'],
    }, { validator: this.passwordMatchValidator });
  }

  private builderCorporateForm() {
    this.registerForm = this.fd.group({
      shopName: [''],
      businessType: [''],
      contactName: [''],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  private corporateRegister() {
    console.log(this.registerForm.value);
    this.spinnerService.close();
  }

  getFomrControl(controlName: string) {
    return this.registerForm.get(controlName);
  }

  private passwordMatchValidator(formGroup: FormGroup): { mismatch: boolean } | null {
    const passControl = formGroup.get('password')!;
    const confirmControl = formGroup.get('confirmPassword')!;

    if (passControl.value && confirmControl.value) {
      return passControl.value === confirmControl.value ? null : { mismatch: true };
    }

    return { mismatch: true };
  }

  get emailErrorMessage(): string[] {
    const message: string[] = [];
    const emailControl = this.getFomrControl('email');
    const { dirty, pristine, touched } = emailControl ?? { dirty: null, pristine: null, touched: null };
    if ((touched && !pristine) || dirty) {
      if (emailControl?.hasError('required')) message.push('กรุณากรอกอีเมล');
      if (emailControl?.hasError('pattern')) message.push('Email ไม่ถูกต้อง กรุณากรอกข้อมูลให้ครบถ้วน');
    }
    return message;
  }

  get phoneNumberErrorMessage(): string[] {
    const message: string[] = [];
    const phoneNumberControl = this.getFomrControl('phoneNumber');
    const { dirty, pristine, touched } = phoneNumberControl ?? { dirty: null, pristine: null, touched: null };
    if ((touched && !pristine) || dirty) {
      if (phoneNumberControl?.hasError('required')) message.push('กรุณากรอกเบอร์โทรศัพท์');
      if (phoneNumberControl?.hasError('pattern')) message.push('กรอกหมายเลขโทรศัพท์ 10 หลัก ');
    }
    return message;
  }

  get passwordErrorMessage(): string[] {
    const message: string[] = [];
    const passwordControl = this.getFomrControl('password');
    const { dirty, pristine, touched } = passwordControl ?? { dirty: null, pristine: null, touched: null };
    if ((touched && !pristine) || dirty) {
      if (passwordControl?.hasError('required')) message.push('กรุณากรอกรหัสผ่าน');
      if (passwordControl?.hasError('pattern')) message.push('รหัสผ่านไม่ถูกต้อง กรุณากรอกข้อมูลใหม่');
    }
    return message;
  }

  get confirmPasswordErrorMessage(): string[] {
    const message: string[] = [];
    const confirmPasswordControl = this.getFomrControl('confirmPassword');
    const { dirty, pristine, touched } = confirmPasswordControl ?? { dirty: null, pristine: null, touched: null };
    if ((touched && !pristine) || dirty) {
      // if (emailControl?.hasError('required')) message.push('กรุณากรอกเบอร์โทรศัพท์');
      if (this.registerForm.hasError('mismatch')) message.push('รหัสผ่านไม่ตรงกัน');
    }
    return message;
  }

  get isShowEyePassword(): boolean {
    const passControl = this.getFomrControl('password');
    return passControl?.dirty && passControl.value !== '' ? true : false;
  }

  get isShowEyeConfirmPassword(): boolean {
    const passControl = this.getFomrControl('confirmPassword');
    return passControl?.dirty && passControl.value !== '' ? true : false;
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(item => item.unsubscribe());
    }
  }
}
