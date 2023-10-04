import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base-class/base.component';


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
      <span *ngIf="isOtpMobile" class="fz-16 text-mauve ff-kl">กรุณากรอกรหัส OTP 6 หลัก ที่ส่งไปยังหมายเลขโทรศัพท์ของท่าน 012***6789 รหัสนี้มีอายุการใช้งาน 5 นาที</span>
      <span *ngIf="!isOtpMobile" class="fz-16 text-mauve ff-kl">กรุณากรอกรหัส OTP 6 หลัก ที่ส่งไปยังอีเมลของท่าน LHCdemo@gmail.com รหัสนี้มีอายุการใช้งาน 5 นาท</span>
    </div>

    <div class="try-agin">
      <span class="text-decoration-underline text-lake">ไม่ได้รับรหัส ?</span>
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
})
export class AccountMobileOtpComponent extends BaseComponent {

  valueVeriry = '123456';

  isInvalid!: boolean;


  constructor(override router: Router, override atr: ActivatedRoute) {
    super(router, atr);
  }

  compairOtp(otpValue: string) {
    if(!otpValue) return;

    otpValue === this.valueVeriry ? this.isInvalid = false: this.isInvalid=true;
  
    // if isValid value is false
    if(this.isInvalid) {
      // TODO 
      // show error dialog;
      return;
    }

    // if isValid value is true
    // change page

    if (this.isPersonal) {
      this.isOtpMobile
        ? this.navigation('email-otp', this.page)
        : this.navigation('setup-pin', this.page);
    } else {
      this.isOtpMobile
        ? this.navigation('email-otp', this.page)
        : this.navigation('setup-pin', this.page);
    }
  }
}
