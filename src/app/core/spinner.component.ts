import { Component } from "@angular/core";
import { SpinnerService } from "../services/spinner.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-spinner',
  template: `

        <div class="overay" *ngIf="enableSpinner|async">
          <div class="spinner">
            <span class="loader"></span>
          </div>
        </div>
    
    `,
  styles: [`

    .spinner {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    
    .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 2s linear infinite ;
      }
      .loader::after{
        transform: rotate3d(90, 90, 0, 180deg );
        border-color: #FF3D00;
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      }



    `]
})
export class SpinnerComponent {
  enableSpinner: Observable<boolean>;
  constructor(public spinnerService: SpinnerService) {
    this.enableSpinner = this.spinnerService.spinner$();
  }
}