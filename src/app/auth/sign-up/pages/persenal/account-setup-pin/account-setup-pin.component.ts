import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base-class/base.component';
import { CustomerStorageType, UserStorage } from 'src/app/models/enum';
import { CreatePin, PinResponse } from 'src/app/models/pin.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PinService } from 'src/app/services/pin.service';
import { PopupService } from 'src/app/services/popup.service';

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
          <app-otp-pin (onSubmit)="createPin($event)" [isError]="isPinInvalid"></app-otp-pin>
        </div>

        <div class="bordre text-center error-text d-flex align-items-center justify-content-center">
          <p class="mb-0 text- ff-kl" *ngIf="isSetupPin">กรุณาตั้งรหัส PIN 6 หลัก เพื่อความปลอดภัยในการใช้งาน</p>
          <p class="mb-0 text- ff-kl" *ngIf="!isSetupPin && !isPinInvalid">กรุณายืนยันรหัส PIN 6 หลัก </p>
          <p class="mb-0 text-red-hot-mama ff-kl" *ngIf="isPinInvalid">รหัส PIN ไม่ตรงกัน กรุณากรอกอีกครั้ง</p>
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
  providers: [PinService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSetupPinComponent extends BaseComponent implements OnInit {

  protected isSetupPin: boolean;

  protected isPinInvalid!: boolean;


  constructor(
    override router: Router,
    override atr: ActivatedRoute,
    private pinService: PinService,
    private popupService: PopupService,
    private ref: ChangeDetectorRef,
    private storage: LocalStorageService) {
    super(router, atr);
    this.isSetupPin = this.url.includes('setup-pin');
    console.log(this.page)
  }

  ngOnInit(): void {
    console.log(this.url)
  }


  /**
   * สำหรับเปรียบเทียบพิน
   * @param firstPin รหัสพินรอบแรก
   * @param lastPin รหัสพินรอบล่าสุด
   * @returns 
   */
  compare(firstPin: string, lastPin: string): boolean {
    if (firstPin === lastPin) return true;
    return false;
  }


  createPin(pinNumber: string) {
    if (!pinNumber) return;

    if (this.isSetupPin) {
      localStorage.setItem(CustomerStorageType.PINSETUP, pinNumber);
      this.navigation('confirm-pin', this.page);

    } else {

      const firstPin = localStorage.getItem(CustomerStorageType.PINSETUP);
      const lastPin = pinNumber;
      if (firstPin && lastPin) {
        this.isPinInvalid = this.compare(firstPin, lastPin);


        // not same pin value 
        if (this.isPinInvalid) {
          // TODO ต้องทำอย่างไรเมื่อกรอก pin หลายรอบแต่ไม่ถูก
          // show error dialog

          // this.navigation('setup-pin', this.page);
          return;
        }



        // same pin value

        let accId = this.storage.getItem(UserStorage.USER_ACC_ID) as string;

        if (!accId) {

        }

        const createPin: CreatePin = {
          accId,
          pinNumber: lastPin,
        }
        const next = (res: PinResponse) => {
          console.log(res)
          // สำเร็จ
          if (res && res.status) {
            this.popupService.open({
              type: 'complete',
              icon: 'complete',
              textHead: 'สำเร็จ',
              disc: 'การตั้งค่า PIN ของท่านสำเร็จ',
              btnLabel: 'ดำเนินการต่อ',
              confirm: () => {
                this.navigation('finish', this.page);
              },
            })
          }

          // ไม่สำเร็จ
          if (res && !res.status) {

          }
        }
        this.pinService.createPin(createPin).subscribe({ next });


      }

    }


  }




}
