import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MenuModel } from '../models/menu.medel';
@Component({
  selector: 'app-trad',
  template: `

    <!--  -->
    <div class="container rounded-bottom-4">
      <div class="card bg-milk rounded-0 rounded-bottom-4 py-0">
        <div class="card-body py-0" style="min-height: 88px;">
          <div class="row py-2 pb-1">
            <div class="col-xl-3 text-center text-xl-start ">
              <img src="assets/images/lhc-brand.svg" style="width: auto; max-width: 53.56px" alt="">
              <img src="assets/images/lhc-logo.svg" style="width: auto; max-width: 107px" alt="">
            </div>
            <div class="col-xl-5 ">
              <div class="row">
                <div class="col-10 ">
                  <input type="text" placeholder="Customer ID/Name" class="border px-3 rounded-pill fz-15 w-100 h-100">
                </div>
                <div class="col-2  py-3">
                  <span type="button" class="text-mauve text-decoration-underline">Clear</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 ">
              <div class="row">
                <div class="col-3  p-0 text-center">
                  <img src="assets/images/default-avata.svg" style="width: auto; max-width: 60px" alt="">
                </div>
                <div class="col-5 ">
                  <div class="mb-0">
                    <span>สวัสดี, </span> 
                    <span class="text-maud"> 000019</span>
                  </div>
                  <div class="text-orange" style="font-size: 20px;">LHC Trading</div>
                </div>
                <div class="col-3  p-0">
                  <p class="py-1 m-0 bg-green text-center text-drone rounded">ยืนยันตัวตน</p>
                  <div class="text-center">
                    <span class="text-charcoal" style="font-size: 18px;">Level 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- menu -->
    <div class="container px-5">
      <div class="row">
        <div class="col-6 col-md-2 col-xl-2 mb-2 mb-xl-0 pb-0"  routerLink="{{menu.link}}"  *ngFor="let menu of menus">
          <div class="align-items-center d-flex justify-content-center menu-link py-2 text-center"  routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" type="button">
            <img class="pe-2" [src]="menu.icon" alt="">
            <span class="fz-20">{{menu.label}}</span>
          </div>
        </div>
        <div class="col-6 col-md-2 col-xl-2">
          <div class="row justify-content-end h-100 align-items-center gap-3 gap-xl-5 pe-4">
            <div class="col-2" type="button">
            <img src="assets/images/icons-menu/bell.svg" alt="">
          </div>
          <div class="col-2" type="button">
              <img src="assets/images/icons-menu/signout.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="container-fluid tab-f" style="min-height: 56px;">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-md-6 col-xl-4 py-0">
            <div class="border-0 card h-100 px-5 rounded-0 tab-l">
              <div class="row">
                <div class="align-items-start col-6 d-flex ps-0 py-1">
                  <img src="assets/images/flag.svg" style="max-width: 35px;" alt="">
                  <div class="">
                    <p class="m-0 text-white ff-kr fz-22" style="line-height: 1;">USDTHB</p>
                    <span class="text-danger ff-mm fz-14">-0.080</span>
                  </div>
                </div>
                <div class="align-items-start col-6 d-flex justify-content-between py-1">
                  <span class="text-glaze ff-mm fz-22" style="line-height: 1;">34.67</span>
                  <span class="text-nacho ff-mm fz-22" style="line-height: 1;">34.69</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-4 py-0">
            <div class="border-0 card h-100 px-5 rounded-0 tab-l">
              <div class="row">
                <div class="align-items-start col-6 d-flex ps-0 py-1">
                  <img src="assets/images/gold.svg" style="max-width: 35px;" alt="">
                  <div class="">
                    <p class="m-0 text-white ff-kr fz-22" style="line-height: 1;">XAUUSD</p>
                    <span class="text-green ff-mm fz-14">+0.080</span>
                  </div>
                </div>
                <div class="align-items-start col-6 d-flex justify-content-between py-1">
                  <span class="text-glaze ff-mm fz-22" style="line-height: 1;">34.67</span>
                  <span class="text-nacho ff-mm fz-22" style="line-height: 1;">34.69</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 col-xl-4 py-0">
            <div class="card border-0 h-100 rounded-0 px-5" style="background: transparent;">
              <div class="row h-100">
                <div class="col-xl-9 offset-0 offset-xl-3 h-100 align-items-center d-flex justify-content-center  justify-content-xl-end pe-0">
                  <p class="mb-0 text-center text-xl-end text-white">{{nowDate|date:'dd/MM/yyyy hh:mm:ss':'UTC+7' }} (UTC+7)</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>


    <div class="container">
      <div class="card rounded-0 rounded-bottom-4 border-0 wrap-content shadow">
        <div class="card-body">
          <router-outlet></router-outlet>
        </div>
        <app-footer></app-footer>
      </div>
    </div>

  `,
  styles: [`
  
      :host {
        display: block;
        background: rgb(255,247,229);
        background: linear-gradient(0deg, rgba(255,247,229,1) 0%, rgba(248,224,172,1) 100%);
        width: 100%;
        height: 100%;
        overflow: scroll;
      }

      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          /* Firefox */
          color: #C1C1C1;
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          /* color: red; */
          color: #C1C1C1;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
          /* color: red; */
          color: #C1C1C1;
        }

      .wrap-bar {

      }

      .badge {
        width: 30px;
        height: 30px;
        top: 5px;
        right: -25px;
        font-size: .8rem;
      }

      .active {
        background: rgb(253,255,254);
        background: linear-gradient(180deg, rgba(253,255,254,1) 0%, rgba(146,0,238,0) 100%);
      }
      
      .menu-link {
        color: var(--color-chianti);
        font-size: 1rem;
      }

      .tab-full {
        background: rgba(132, 123,101, 1);
      }
      
      .tab-f {
        background: rgba(154, 143, 117, 1);
      }

      .tab-l {
        background: rgb(54,51,44);
        background: linear-gradient(0deg, rgba(54,51,44,1) 0%, rgba(154,143,117,1) 100%);
      }

      .wrap-content {
        background: #FCF3DE;
      }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradComponent {

  constructor(private ref: ChangeDetectorRef) {}

  menus: MenuModel[] = [
    { id: '101', label: 'หน้าหลัก', icon: 'assets/images/icons-menu/home.svg', link: '/' },
    { id: '102', label: 'ซื้อ-ขาย', icon: 'assets/images/icons-menu/graph.svg', link: '/trade' },
    { id: '103', label: 'สินทรัพย์', icon: 'assets/images/icons-menu/pizza.svg', link: '/asset' },
    { id: '104', label: 'เคลียร์ริ่ง', icon: 'assets/images/icons-menu/wallet.svg', link: '/clearing' },
    { id: '105', label: 'ตั้งค่าบัญชี', icon: 'assets/images/icons-menu/setting.svg', link: '/setting' },
  ]

  get nowDate() {
    return new Date();
  }

}
