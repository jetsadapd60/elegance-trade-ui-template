import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-bank-account',
  template: `
    <div class="container rounded-bottom-4">
      <div class="card top-bar bg-milk rounded-0 rounded-bottom-4 py-0">
        <div class="card-body py-0 " style="height: 88px;">
          <div class="row py-2 pb-1">
            <div class="col-6 text-center text-xl-start ">
              <img src="assets/images/lhc-brand.svg" style="width: auto; max-width: 53.56px" alt="">
              <img src="assets/images/lhc-logo.svg" style="width: auto; max-width: 107px" alt="">
            </div>
            <div class="col-6 border">ee</div>
          </div>
        </div>
      </div>
    </div>


    <div class="container content">
      <div class="h-100 overflow-hidden px-5 py-3 wrap">
          <div class="bg-white d-flex h-100 layout overflow-hidden rounded-4">
            <div class="layout__left position-relative">
              <div class="wrap-hero h-100 rounded-4 d-flex flex-column justify-content-center align-items-center">
                <img src="assets/images/bank-account-icon-hero.svg" class="hero-image w-50" alt="">
              </div>
              <span class="call-center-text text-dull">Langhong Contact Center  : 02-1234567</span>
            </div>
            <div class="layout__right h-100">
              <router-outlet></router-outlet>
            </div>
          </div>
      </div>
    </div> 

    <div class="container">
      <app-footer></app-footer>
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

  .content {
    height: calc(100vh - (88px + 60px));
  }

  .wrap-hero {
    border-radius: 20px;
    background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 992px) {
    .layout {
      height: 90%;
      max-height: 650px;
      background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);

        &__left, &__right {
          min-height: 80%;
        }

        &__right {
          padding: 45px;
        }
    }

    .call-center-text {
      position: absolute;
      left: 30%;
      top: 90%;
      font-size: 14px;
      /* width: 100%; */
    }
  }

  @media (min-width: 1200px) {

    .layout {
      height: 90%;
      max-height: 650px;
      background: linear-gradient(180deg, #FFF 1.36%, #F3F3F3 101.79%);
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
      &__left, &__right {
        width: 50%;
        min-height: 650px;
      }

      &__right {
        padding: 20px 40px;
        height: 100%;
      }

      .call-center-text {
        position: absolute;
        left: 30%;
        top: 90%;
        font-size: 16px;
        /* width: 100%; */
      }
  }
      
  }



`],
providers: [RouterService],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankAccountComponent {
  constructor(protected routerService: RouterService) {}
}
