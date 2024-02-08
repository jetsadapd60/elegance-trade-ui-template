import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, map } from "rxjs";
import { ProfileService } from "src/app/services/profile.service";
import { RouterService } from "src/app/services/router.service";

@Component({
    selector: 'account-setting',
    template: `

        <div class="account row">

            <div class="text-center col-9 offset-2 ">
                <img src="assets/images/image-manage-account.svg" style="max-width: 350px;" alt="">
            </div>

            <div class="col-9 offset-2">
                <p class="fz-24 text-warning">ข้อมูลส่วนตัว</p>
            </div>


           <!-- ยืนยันตัวตนแล้ว -->
            <ng-container *ngIf="(profileService.isActivateAccount|async) else activate">
                <div class="col-10 offset-1">
                    <div class="pb-4 row ">
                        <label for="" class="fz-20 text-mist">ชื่อ</label>
                        <div class="col-12 d-flex gap-4 pt-0 fz-16 position-relative">
                            <input type="text" disabled placeholder="ยังไม่ยืนยันตัวตน" class="px-3 w-100 hh-45 border rounded">
                            <img width="35" height="35" class="name-activate" src="assets/images/check-cycle.svg" alt="">
                        </div>
                    </div>
                    <div class="pb-4 row">
                        <label for="" class="fz-20 text-mist">บัญชีธนาคาร</label>
                        <div class="col-12 gap-4 pt-0 fz-16">
                            <div class="row m-0 rounded border text-wolf ff-kl">
                                <div class="col-2"><img width="57" height="57" src="assets/images/scb-icon.svg" alt=""></div>
                                <div class="col-5">
                                    <p class="m-0">ธนาคารไทยพาณิชย์</p>
                                    <p class="m-0">1234567890</p>
                                </div>
                                <div class="col-5">
                                    <span class="d-block bg-metallic text-center rounded text-white py-1">อยู่ระหว่างตรวจสอบเอกสาร</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pb-4 row">
                        <label for="" class="fz-20 text-mist">เบอร์มือถือ</label>
                        <div class="col-12 d-flex gap-4 pt-0 fz-16">
                            <input type="text" disabled placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border w-100 rounded">
                        </div>
                    </div>
                    <div class="pb-4 row">
                        <label for="" class="fz-20 text-mist">อีเมล</label>
                        <div class="col-12 d-flex gap-4 pt-0 fz-16">
                            <!-- <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border w-100 rounded"> -->
                            <input type="email" disabled placeholder="lhcdemotrading@gmail.com" class="px-3 w-100 hh-45 border rounded">
                        </div>
                    </div>
                </div>
            </ng-container>


            <!-- ยังไม่ยืนยันตัวตน -->
            <ng-template #activate>
                <div class="col-10 offset-1">
                    <div class="pb-4 row ">
                        <label for="" class="fz-20 text-mist">ชื่อ</label>
                        <div class="col-12 d-flex gap-4 pt-0 fz-16 ">
                            <input type="text" disabled placeholder="ยังไม่ยืนยันตัวตน" class="px-3 w-100 hh-45 border rounded">
                            <button [disabled]="(this.profileService.statusKYC|async) === 'W' ? true:false" (click)="routerService.navigation(eKycActionPage || 'KycPage1')" class="btn btn-namer ff-kr text-white h-100 pt-1" style="min-width: 204px">เริ่มการยืนยันตัวตน</button>
                        </div>
                    </div>
                    <div class="pb-4 row">
                    <label for="" class="fz-20 text-mist">บัญชีธนาคาร</label>
                    <div class="col-12 d-flex gap-4 pt-0 fz-16">
                        <input type="text" disabled placeholder="ยังไม่ยืนยันตัวตน" class="px-3 w-100 hh-45 border rounded">
                        <button [disabled]="(this.profileService.statusBankAccount|async) === 'W' ? true:false" (click)="routerService.navigation('/bank-account')" class="btn btn-namer ff-kr text-white h-100 pt-1" style="min-width: 204px">เริ่มการยืนยันบัญชีธนาคาร</button>
                    </div>
                    </div>
                    <div class="pb-4 row">
                        <label for="" class="fz-20 text-mist">เบอร์มือถือ</label>
                        <div class="col-12 d-flex gap-4 pt-0 fz-16">
                            <input type="text" disabled placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border w-100 rounded">
                        </div>
                    </div>
                    <div class="pb-4 row">
                        <label for="" class="fz-20 text-mist">อีเมล</label>
                        <div class="col-12 d-flex gap-4 pt-0 fz-16">
                            <!-- <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border w-100 rounded"> -->
                            <input type="email" disabled placeholder="lhcdemotrading@gmail.com" class="px-3 w-100 hh-45 border rounded">
                        </div>
                    </div>
                </div>
            </ng-template>



        </div>
    
    `,
    styles: [`
        ::placeholder {
            color: #9C9FA6;
            font-size: 20px;
            font-family : "Kanit-Light";
        }

        .btn {
            box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.10);
        }

        input {
            &:focus-visible {
                /* outline-offset: 5px; */
                outline: none;
            }
        }

        .name-activate {
            position: absolute;
            right: 5%;
            top: 43%;
            transform: translateY(-50%);
        }
    `],
    providers: [RouterService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSettingComponent implements OnDestroy  {
    eKycActionPage: string = '/e-kyc/KycPage1';

    private subscription: Subscription;
    constructor(protected routerService: RouterService, public profileService: ProfileService) {

        const next = (KycPage: string) => {
            if(KycPage !== null) this.eKycActionPage=`/e-kyc/${KycPage}`
        }
        this.subscription = this.profileService
                                .eKycActionPage
                                .subscribe({ next });
    }

    ngOnDestroy(): void {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}