import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-e-kyc',
  template: `
    <div class="container rounded-bottom-4">
      <div class="card top-bar border-0 bg-milk rounded-0 rounded-bottom-4 py-0">
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
      <router-outlet></router-outlet>
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

  /* .content {
    height: calc(100vh - (88px + 60px));
    border: 1px solid;
  } */



  /* Large devices (desktops, 992px and up) lg */
  @media (min-width: 992px) {
  }

  /* X-Large devices (large desktops, 1200px and up) xl */
@media (min-width: 1200px) { 
  }



`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EKycComponent {}
