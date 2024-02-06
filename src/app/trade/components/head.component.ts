import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MemberIdService } from "src/app/services/member-id.service";
import { ProfileService } from "src/app/services/profile.service";
import { StatusLoggedInService } from "src/app/services/status-logged-in.service";

@Component({
    selector: 'app-trade-header',
    template: `
    
    <div class="container rounded-bottom-4">
        <div class="card top-bar bg-milk rounded-0 rounded-bottom-4 py-0">
            <div class="card-body py-0" style="min-height: 88px;">
                <div class="align-items-center pb-1 py-2 row">
                <div class="col-xl-3 text-center text-xl-start ">
                    <img src="assets/images/lhc-brand.svg" style="width: auto; max-width: 53.56px" alt="">
                    <img src="assets/images/lhc-logo.svg" style="width: auto; max-width: 107px" alt="">
                </div>

                <div class="col-xl-5 ">
                    <div class="row" *ngIf="statusLoglinService.isMarketingLoggedInOnUser || statusLoglinService.isPureMarketingLoggedIn">
                    <div class="col-10 ">
                        <input type="text" placeholder="Customer ID/Name" class="border px-3 rounded-pill fz-15 w-100 h-100">
                    </div>
                    <div class="col-2  py-3">
                        <span type="button" class="text-mauve text-decoration-underline">Clear</span>
                    </div>
                    </div>
                </div>
                
                <div class="col-xl-4 ">
                    <div class="row align-items-center">
                        <div class="col-3  p-0 text-center ">
                            <img class="avatar rounded-circle border " src="{{profileService.profileImage|async}}" style="width: auto; max-width: 60px" alt="">
                        </div>
                        <div class="col-5 ">
                            <div class="mb-0">
                                <span>สวัสดี, </span> 
                                <span class="text-maud">{{memberIdService.id}}</span>
                            </div>
                            <div class="text-orange" style="font-size: 20px;">{{profileService.fullName|async}}</div>
                        </div>
                        <div class="col-3  p-0">
                            <p [ngClass]="{'bg-green': (profileService.isActivateAccount|async), 'bg-sketch text-white': !(profileService.isActivateAccount|async)}" class="py-1 m-0 text-center text-drone rounded">ยืนยันตัวตน</p>
                            <div class="text-center">
                                <span class="text-charcoal" style="font-size: 18px;">Level {{profileService.level|async}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    `,
    styles: [`

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

        .avatar {
            width: 60px;
            height: 60px;
        }

        .activate {}



    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradeHeaderComponent {
    constructor(
        public statusLoglinService: StatusLoggedInService, 
        public profileService: ProfileService,
        public memberIdService: MemberIdService) {}
}