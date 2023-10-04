import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base-class/base.component';
import { CustomerStorageType } from 'src/app/models/enum';
import { storage } from 'src/app/utils/local-storage';

@Component({
  selector: 'app-account-setup-pin',
  template: `

        <h3 class="head-text ff-kr text-apple pt-lg-4 my-0 pt-md-3">
          <span *ngIf="isSetupPin">ตั้งค่ารหัส PIN</span>
          <span *ngIf="!isSetupPin">ยืนยันรหัส PIN</span>
        </h3>


        <div class="text-center mobile-icon-wrap">
          <img src="assets/images/setup-pin-icon.svg" alt="">
        </div>


        <div class="otp-wrap d-flex justify-content-center">
          <app-otp-pin (onSubmit)="compair($event)" [isError]="isInvalid"></app-otp-pin>
        </div>

        <div class="bordre text-center error-text d-flex align-items-center justify-content-center">
          <p class="mb-0 text- ff-kl" *ngIf="isSetupPin">กรุณาตั้งรหัส PIN 6 หลัก เพื่อความปลอดภัยในการใช้งาน</p>
          <p class="mb-0 text- ff-kl" *ngIf="!isSetupPin && !isInvalid">กรุณายืนยันรหัส PIN 6 หลัก </p>
          <p class="mb-0 text-red-hot-mama ff-kl" *ngIf="isInvalid">รหัส PIN ไม่ตรงกัน กรุณากรอกอีกครั้ง</p>
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
            padding-top: 30px;
          /* height: 29px; */
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
            padding-top: 50px;
            /* height: 49px; */
          /* border: 1px solid red; */
        }
         }
    
    
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSetupPinComponent extends BaseComponent implements OnInit {

  protected isSetupPin:boolean;

  protected isInvalid!:boolean;
  

  constructor(override router: Router, override atr: ActivatedRoute, private ref: ChangeDetectorRef) {
    super(router, atr);
    this.isSetupPin = this.url.includes('setup-pin');
    console.log(this.page)
  }

  ngOnInit(): void {
    console.log(this.url)
  }


  compair(value: string) {
    if(!value) return;
    
    if(this.isSetupPin) {
      storage.set(CustomerStorageType.PINSETUP, value);
      this.navigation('confirm-pin', this.page);
      
    } else {

      const pinSetup = storage.get(CustomerStorageType.PINSETUP);
      const isValidPin = !!pinSetup;
      if(isValidPin) {
        
        value === pinSetup ? this.isInvalid = false:this.isInvalid = true;

        // not same pin value 
        if(this.isInvalid) {
          // TODO
          // show error dialog
          this.navigation('setup-pin', this.page);
          return;
        }

        
        // same pin value
        this.navigation('finish', this.page);
        console.log('ok`')

      }

    }


  }

  
  

}
