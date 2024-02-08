import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sign-up',
  template: `
    <!-- <div class="container">
      <div class="row">
        <div class="col-lg-6 pe-0 border">
          <div class="card rounded-end-0 rounded-start-4 background-gradient">
            <div class="card-body">
              <div>
                <img src="assets/images/combine-logo-lhc.svg" class="hero-image" alt="">
              </div>
              <div class="row">
                <div class="col border text-center">
                  <img src="assets/images/signup-image.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ps-0 border">
          <div class="card rounded-end-4 rounded-start-0 h-100 background-gradient">
            <div class="card-body">
              <router-outlet></router-outlet>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container">
      <div class="layout d-flex justify-content-center align-items-center h-100">
        <div class="layout__left background-gradient-left rounded-start-4  p-4">
          <div class="wrap-logo">
            <img src="assets/images/combine-logo-lhc.svg" class="hero-image" alt="">
          </div>
          <div class="wrap-hero text-center ">
            <img src="assets/images/signup-image.svg" class="" alt="">
          </div>
        </div>
        <div class="layout__right background-gradient-right  rounded-end-4 p-4 pb-0">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>


  `,
  styles: [`
    .background-gradient-right {
      border-radius: 0px 20px 20px 0px;
      background: linear-gradient(0deg, #FFFAEE 32.64%, #FFE2A4 100%);
    };
    

    .background-gradient-left {
      background: rgb(255,250,238);
      background: linear-gradient(0deg, rgba(255,250,238,1) 0%, rgba(255,226,164,1) 100%);
    };

    /* X-Small devices (portrait phones, less than 576px) */
    /* No media query for xs since this is the default in Bootstrap */

    .container {
      height: 100%;   
    }

      /* Small devices (landscape phones, 576px and up) sm */
      @media (min-width: 576px) {  }

      /* Medium devices (tablets, 768px and up) md */
      @media (min-width: 768px) {  }

      /* Large devices (desktops, 992px and up) lg */
      @media (min-width: 992px) { 
        .container {
          /* border: 2px solid blue; */
        }
        .layout {
          &__left, &__right {
            width: 50%;
            min-height: 90%;
          }
        }

        .wrap {
          &-hero {
            padding-top: 31px;
          }
        }
      }

       /* X-Large devices (large desktops, 1200px and up) xl */
      @media (min-width: 1200px) { 
        .container {
          /* border: 2px solid red; */
        }
        .layout {
          &__left, &__right {
            width: 598px;
            min-height: 0%;
            height: 700px;
          }
        }

        .wrap {
          &-hero {
            padding-top: 61px;
          }
        }
       }

       /* XX-Large devices (larger desktops, 1400px and up) xxl */
      @media (min-width: 1400px) {  }


  `],
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {}
