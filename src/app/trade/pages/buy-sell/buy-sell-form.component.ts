import { Component } from '@angular/core';
import { BuySellConfirmService } from 'src/app/services/buy-sell-confirm.service';

// interface City {
//   name: string;
//   code: string;
// }

@Component({
  selector: 'app-buy-sell-form',
  template: `
          <div class="card border-0 rounded-0 rounded-bottom-4" style="height: 616px;">
          <div class="card-body py-0">
            
            <div class="row px-5 px-xl-0">
              <div class="col-12">
                <div class="row">
                  <div class="col-6 py-0 d-flex gap-2 align-items-center mb-3">
                    <span [dotStatus]="configDotStatus"></span>
                    <span class="fz-14 text-mist ff-mr">Open</span>
                  </div>
                  <div class="col-6 py-0 text-end ff-mm text-primary">+50</div>
                </div>
                <div class="row">
                  <div class="col-6 py-0">
                    <p class="m-0 fs-14 text-sketch ff-mm">High 32,418 <span class="ff-kr">บาท</span></p>
                  </div>
                  <div class="col-6 py-0 text-end">
                    <p class="m-0 fz-14 text-sketch ff-mm">High 32,503 <span class="ff-kr">บาท</span></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 py-0">
                    <p class="m-0 fz-40 text-sketch ff-mm text-danger">32,290</p>
                  </div>
                  <div class="col-6 py-0 text-end">
                    <p class="m-0 fz-40 text-sketch ff-mm text-primary">32,350</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 py-0">
                    <p class="m-0 fz-14 text-sketch ff-mm">Low 32,184 <span class="ff-kr">บาท</span></p>
                  </div>
                  <div class="col-6 py-0 text-end">
                    <span class="fz-14 text-sketch ff-mm">Low 32,264 <span class="ff-kr">บาท</span></span>
                  </div>
                </div>
              </div>
            </div>

            <form class="px-lg-5 px-xl-0">
              <div class="form-group d-flex flex-column">
                <label for="condition" class="fz-14 ff-mm text-sketch mb-1">Condition</label>
                <select class="form-select text-center py-0" style="height: 40px;" aria-label="Default select example">
                  <option value="1" selected>One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div>
                  <div class="form-group d-flex flex-column mb-2">
                    <label for="limit-price" class="fz-14 ff-mm text-sketch mb-1">Limit Price</label>
                    <p-inputNumber inputId="limit-price" [maxlength]="4" [style]="{'height':'40px'}" class="w-100"></p-inputNumber>
                  </div>

                  <div class="form-group d-flex flex-column mb-2">
                    <label for="Stop-Price" class="fz-14 ff-mm text-sketch mb-1">Stop Price</label>
                    <p-inputNumber inputId="Stop-Price" [maxlength]="4" [style]="{'height':'40px', 'padding-top':'0px', 'padding-bottom':'0px'}" class="w-100"></p-inputNumber>
                  </div>

                  <div class="form-group d-flex flex-column mb-2">
                    <label for="Volume" class="fz-14 ff-mm text-sketch mb-1">Volume</label>
                    <p-inputNumber inputId="Volume" [style]="{'height':'40px'}" decrementButtonIcon="pi pi-minus" incrementButtonIcon="pi pi-plus" [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" decrementButtonClass="p-button-success" incrementButtonClass="p-button-success" [maxlength]="4" class="w-100 vlm" styleClass="{font-family: 'Montserrat-Medium'}"></p-inputNumber>
                  </div>

                  <div class="form-group text-center">
                    <p class="bm-0 fz-16 text-mist">Amount 96,050/99,050 <span class="ff-kr">บาท</span></p>
                  </div>

                  <div class="form-group mt-4">
                    <div class="row">
                      <div class="col-6">
                        <button (click)="onClickSell($event)" class="btn btn-danger py-0 w-100 text-white btn-lg ff-mm fz-24" style="max-height: 40px;">SELL</button>
                      </div>
                      <div class="col-6">
                        <button  class="btn btn-primary py-0 w-100 text-white btn-lg ff-mm fz-24" style="max-height: 40px;">BUY</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </form>

            <div class="row">
              <div class="col-4 col-xl-6 offset-3 overflow-hidden d-flex align-items-end gap-1">
                <label for="pin" class="text-mist">PIN: </label>
                <input type="password" name="" style="-webkit-text-security: circle;" class="w-100 text-mist border-0 border-bottom p-1 text-center" id="pin">
                <i role="presentation" class="pi {{isLogPassword?'pi-lock':'pi-lock-open'}}" type="button" (click)="isLogPassword=!isLogPassword" style="font-size: 1.2rem"></i>
              </div>
            </div>
          </div>
        </div>

  `,
  styles: [
    `


      ::ng-deep {
        .p-dropdown {
          width: 100%;
        }

        .p-dropdown:hover {
          border: 1px solid red;
        }

        .p-inputnumber {
          width: 100%;
          overflow: hidden;
        }
        .p-inputnumber-input {
          text-align: center;
        }
        .p-inputtext {
          /* border: 2px solid red; */
        }
        .p-button.p-button-warning,
        .p-buttonset.p-button-warning > .p-button,
        .p-splitbutton.p-button-warning > .p-button {
          color: #4a4444;
          background: #fff;
          border: 1px solid #c7c7c7;
        }

        .p-button.p-button-warning:enabled:hover,
        .p-buttonset.p-button-warning > .p-button:enabled:hover,
        .p-splitbutton.p-button-warning > .p-button:enabled:hover {
          /* background: #fff;
          color: #4A4444;
          border: 1px solid #FFC455; */
        }

        .p-button.p-button-success,
        .p-buttonset.p-button-success > .p-button,
        .p-splitbutton.p-button-warning > .p-button {
          color: #4a4444;
          background: #fff;
          border: 1px solid #c7c7c7;
          /* border-left: none; */
        }

        .p-button.p-button-success:enabled:hover,
        .p-buttonset.p-button-success > .p-button:enabled:hover,
        .p-splitbutton.p-button-warning > .p-button:enabled:hover {
          /* background: #D97706;
          color: #ffffff;
          border-color: #D97706; */

          /* background: #fff;
          color: #4A4444;
          border: 1px solid #C7C7C7; */

          /* border: 1px solid #FFC455; */
        }

        .p-inputtext:enabled:hover {
        border-color: none;
        border: 1px solid #1E9CD6;
      }

       .vlm .p-inputtext {
          border: none;
          border-top: 1px solid #C7C7C7;
          border-bottom: 1px solid #C7C7C7;
        }
        .vlm .p-inputtext:enabled:hover:focus {
          border-color: none;
          border: 1px solid #1E9CD6;
        }

        select {
          padding: 12px !important;
        }

        select:hover {
          border: 1px solid #1E9CD6;
        }

        select:focus {
          /* border: 1px solid red; */
          box-shadow: none !important;
          
        }

        input[type="password"] {
          /* -webkit-text-security: square; */
          transition: all .3s;
        }

        input[type="password"]:hover {
          border-bottom: 1px solid #1E9CD6 !important;
        }

        input[type="password"]:focus {
          outline: none;
        }

        /* input.pas:focus {
        border: none !important;
        box-shadow: none !important;
        outline: none;
      } */

      /* .pass:focus {
        border: none;
        box-shadow: none;
      } */

        .p-inputtext:enabled:focus {
            outline: 0 none;
            outline-offset: 0;
            box-shadow: none;
            border-color: #3B82F6;
        }
      }
    `,
  ],
})
export class BuySellFormComponent {

  isLogPassword = false;

  configDotStatus = {
    bgColor: '#12C28C',
    width: 12,
    height: 12,
    radius: 100,
  };

  constructor(public buySellConfirmService: BuySellConfirmService) {}
  
  onLockPassword() {
    // TODO
  }

  onClickSell(event: MouseEvent) {
    console.log('mouse event ---<>', event);
    this.buySellConfirmService.open({
      modalType: {
        complete: 'Buy'
      },
      detail: 'test',
      accep: () => console.log('accep'),
      cancel: () => console.log('cancel'),
    });
  }
}
