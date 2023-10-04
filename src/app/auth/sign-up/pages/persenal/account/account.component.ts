import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/base-class/base.component';

@Component({
  selector: 'app-select-account',
  template: `

      <div class="wrap-account">
        <div class="wellcom-text ">
          <div class="row">
            <div class="col py-0">
              <h3 class="wellcom-text__front ff-kr mb-0">ยินดีต้อนรับ</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-8 offset-2">
            <span class="ff-kr step-text text-haze">เข้าสู่ขั้นตอนการสมัครสมาชิก</span>
          </div>
        </div>

        <div class="step-account">
          <div class="gradient-bg-account-text text-center">
            <span class="text-haze ff-kr text-namer">เลือกประเภทบัญชี</span>
          </div>
        </div>

        <div class="choice">
          <div class="row">
            <div class="col-6 text-center">
              <div class="pb-2 d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 dot bg-namer"></p>
                <p class="mb-0 ff-kr fz-20 text-chianti">บุคคลธรรมดา</p>
              </div>
              <div class="d-inline" type="button" >
                <!-- <a routerLink="/auth/sign-up/account-policy-personal"> -->
                  <img (click)="navigation('policy', 'personal')" src="assets/images/personal-icon.svg" alt="">
                <!-- </a> -->
              </div>
            </div>
            <div class="col-6 text-center">
              <div class="pb-2 d-flex justify-content-center align-items-center gap-2">
                <p class="mb-0 dot bg-red-hot-mama"></p>
                <p class="mb-0 ff-kr fz-20 text-chianti">นิติบุคคล</p>
              </div>
              <div class="d-inline" type="button" >
                <!-- <a routerLink="/auth/sign-up/account-policy-corporate"> -->
                  <img (click)="navigation('policy', 'corporate')" src="assets/images/corporate-icon.svg" alt="">
                <!-- </a> -->
              </div>
            </div>
          </div>
        </div>

      </div>

  `,
  styles: [`

      .wellcom-text__front {
        background: linear-gradient(100deg, #29ABE2 -6.93%, #A5D3E7 20.63%, #61BDE4 65.99%, #F7FBFD 103.31%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

  
       /* Large devices (desktops, 992px and up) */
      @media (min-width: 992px) { 
        .wellcom-text {
          padding-top: 42px;
        }

        .step-account {
          padding-top: 20px
        }
        .gradient-bg-account-text{
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 2.59%, #FFF 46.12%, rgba(255, 255, 255, 0.00) 93.45%);
          font-size: 20px;
        }

        .dot {
          width: 13px;
          height: 13px;
          border-radius: 100%;
        }

        .step-text {
          font-size: 18px;
        }

        .wellcom-text__front {
          font-size: 38px;
        }

        .choice {
          padding-top: 15px;
        }
       }

       /* X-Large devices (large desktops, 1200px and up) */
      @media (min-width: 1200px) { 
        .wellcom-text {
          padding-top: 60px;
        }
        .step-account {
          padding-top: 30px;
        }
        .gradient-bg-account-text{
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 2.59%, #FFF 46.12%, rgba(255, 255, 255, 0.00) 93.45%);
          font-size: 24px;
        }

        .dot {
          width: 13px;
          height: 13px;
          border-radius: 100%;
        }

        .step-text {
          font-size: 24px;
        }

        .wellcom-text__front {
          font-size: 48px;
        }

        .choice {
          padding-top: 35px;
        }
       }


  `],
})
export class AccountComponent extends BaseComponent {}
