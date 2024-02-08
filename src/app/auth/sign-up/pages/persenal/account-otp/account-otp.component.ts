import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base-class/base.component';
import { UserStorage } from 'src/app/models/enum';
import { OtpRespons } from 'src/app/models/otp.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OtpService } from 'src/app/services/otp.service';
import { PopupService } from 'src/app/services/popup.service';
import { SpinnerService } from 'src/app/services/spinner.service';


@Component({
  selector: 'app-account-mobile-otp',
  template: `
    <h3 class="head-text ff-kr text-apple pt-lg-4 my-0 pt-md-3">
      <span *ngIf="isOtpMobile">OTP ยืนยันเบอร์โทรศัพท์มือถือ</span>
      <span *ngIf="!isOtpMobile">OTP ยืนยันอีเมล</span>
    </h3>
    <div class="text-center mobile-icon-wrap">
      <img *ngIf="isOtpMobile" src="assets/images/mobile-OTP-icon.svg" alt="" />
      <img *ngIf="!isOtpMobile" src="assets/images/Email-OTP-icon.svg" alt="" />
    </div>

    <div class="otp-wrap d-flex justify-content-center">
      <app-otp-pin (onSubmit)="compairOtp($event)" [isError]="isInvalid"></app-otp-pin>
    </div>

    <div class="bordre text-center error-text d-flex align-items-center justify-content-center">
      <p class="mb-0 text-red-hot-mama ff-kl" *ngIf="isInvalid">รหัส OTP ไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง</p>
    </div>

    <div class="text-detail-wrap">
      <span *ngIf="isOtpMobile" class="fz-16 text-mauve ff-kl">กรุณากรอกรหัส OTP 6 หลัก ที่ส่งไปยังหมายเลขโทรศัพท์ของท่าน {{mobilePhone}} รหัสนี้มีอายุการใช้งาน 5 นาที</span>
      <span *ngIf="!isOtpMobile" class="fz-16 text-mauve ff-kl">กรุณากรอกรหัส OTP 6 หลัก ที่ส่งไปยังอีเมลของท่าน {{email}} รหัสนี้มีอายุการใช้งาน 5 นาท</span>
    </div>

    <div class="try-agin">
      <span class="text-decoration-underline pr-2" type="button" [ngClass]="tryAgianOtpBtnStyle" (click)="tryAgianOtp()">ไม่ได้รับรหัส ?</span>
      <span class="text-mauve">({{timer}})</span>
    </div>
  `,
  styles: [
    `
      /* Large devices (desktops, 992px and up) */
      @media (min-width: 992px) {
        .mobile-icon-wrap {
          padding-top: 47px;
        }

        .otp-wrap {
          padding-top: 30px;
        }

        .otp-input {
          height: 60px;
          width: 300px;

          input {
            height: 100%;
            width: 40px;
            font-size: 30px;
          }
        }

        .text-detail-wrap {
          /* padding-top: 39px; */
        }

        .try-agin {
          font-size: 14px;
          padding-top: 11px;
        }
        .error-text {
          height: 29px;
          /* border: 1px solid red; */
        }
      }

      /* X-Large devices (large desktops, 1200px and up) */
      @media (min-width: 1200px) {
        .mobile-icon-wrap {
          padding-top: 67px;
        }

        .otp-wrap {
          padding-top: 50px;
        }

        .otp-input {
          height: 80px;
          width: 400px;

          input {
            height: 100%;
            width: 50px;
            font-size: 36px;
          }
        }

        .text-detail-wrap {
          /* padding-top: 49px; */
        }

        .try-agin {
          font-size: 16px;
          padding-top: 11px;
        }

        .error-text {
          height: 49px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OtpService]
})
export class AccountMobileOtpComponent extends BaseComponent implements OnInit {

  private accID: string | undefined;

  mobilePhone: string = '012***6789';
  email: string = 'LHCdemo@gmail.com';

  isInvalid!: boolean;

  enableTryAgianOtpBtn: boolean = true;
  timer: number = 60;

  get tryAgianOtpBtnStyle() {
    return {
      'text-lake': this.enableTryAgianOtpBtn,
      'text-mauve': !this.enableTryAgianOtpBtn,
    }
  }


  constructor(
      override router         : Router, 
      override atr            : ActivatedRoute, 
      private otpService      : OtpService, 
      private popupService    : PopupService,
      private spinnserService : SpinnerService,
      private ref             : ChangeDetectorRef,
      private storageService  : LocalStorageService, 
      ) {
    super(router, atr);

    this.accID = this.storageService.getItem(UserStorage.USER_ACC_ID);

  }

  ngOnInit(): void {
    let phone = this.storageService.getItem(UserStorage.USER_PHONE_NUMBER);
    let email = this.storageService.getItem(UserStorage.USER_EMAIL);

    if(phone && typeof phone === 'string') this.mobilePhone = phone;
    if(email && typeof email === 'string') this.email = email;
  }

  compairOtp(otpValue: string) {
    if(!otpValue) return;

    this.spinnserService.open();

    const next = (res: OtpRespons) => {

      console.log('otp ----<>', res);

      if(res && res.status) {

        this.popupService.open({
          type: 'complete',
          icon: 'complete',
          textHead: 'สำเร็จ',
          disc: res.message,
          btnLabel: 'ดำเนินการต่อ',
          confirm: () => {
            if (this.isPersonal) {
              this.isOtpMobile
                  ? this.navigation('email-otp', this.page)
                  : this.navigation('setup-pin', this.page);
                } else {
                  this.isOtpMobile 
                      ? this.navigation('email-otp', this.page)
                      : this.navigation('setup-pin', this.page);
                }
              },
            })

      }

      if(res && !res.status) {

        if(res.message === "บัญชีของคุณดำเนินการเรียบร้อยแล้ว") {
          this.popupService.open({
            type: 'error',
            icon: 'error',
            textHead: 'ไม่สำเร็จ',
            disc: res.message,
            btnLabel: 'ดำเนินการต่อ',
            confirm: () => {
              // this.navigation('');
              this.router.navigateByUrl('/auth/sign-in');
            },
          })
        } else {

          this.popupService.open({
            type: 'error',
            icon: 'error',
            textHead: 'ไม่สำเร็จ',
            disc: res.message,
            btnLabel: 'ดำเนินการต่อ',
            confirm: () => {},
          })
        }
      }

    }

    const error = (err: HttpErrorResponse) => {}
    const complete = () => this.spinnserService.close();

    // verify otp by Sms
    if(this.isOtpMobile) {
      const dataOtp = { accId: this.accID, otpSms: otpValue };
      this.otpService.verifyOtpSms(dataOtp).subscribe({ next, error, complete });
    }
    

    // verify otp by email
    if(!this.isOtpMobile) {
      const dataOtp = { accId: this.accID, otpEmail: otpValue };
      this.otpService.verifyOtpEmail(dataOtp).subscribe({ next, error, complete })
    }

  }

  countDown() {
    let timeout: any;
    timeout = setInterval(() => {
      this.timer -= 1;
      if(this.timer <= 1) {
        clearInterval(timeout);
        this.timer = 60;
        this.enableTryAgianOtpBtn = true;
      }
      this.ref.markForCheck();
    }, 1000);   
  }
  
  tryAgianOtp() {
    if(!this.accID || !this.enableTryAgianOtpBtn) return;

    this.spinnserService.open();
    
    
    const next = (res: OtpRespons) => {
      console.log('try again sms ----<>', res);
      if(res && res.status) {
        this.enableTryAgianOtpBtn = false;
        this.countDown();
        this.popupService.open({
          type    : 'complete',
          icon    : 'complete',
          textHead: 'สำเร็จ',
          disc    : res.message,
          btnLabel: 'ดำเนินการต่อ',
          confirm : () => {},
        })
      }

      if(res && !res.status) {
        this.popupService.open({
          type    : 'error',
          icon    : 'error',
          textHead: 'ไม่สำเร็จ',
          disc    : res.message,
          btnLabel: 'ดำเนินการต่อ',
          confirm : () => {
            this.enableTryAgianOtpBtn = true;
          },
        })
      }
    }

    const error = (err: any) => {}
    const complete = () => this.spinnserService.close();
    

    // ขอ otp ของ sms อีกครั้ง
    if(this.isOtpMobile) {
      this.otpService.tryAgainOtpSms(this.accID).subscribe({ next, error, complete });
    }
    
    // ขอ otp ของ email อีกครั้ง
    if(!this.isOtpMobile) {
      this.otpService.tryAgainOtpEmail(this.accID).subscribe({ next, error, complete })
    }
  }
}
