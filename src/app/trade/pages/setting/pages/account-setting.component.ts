import { ChangeDetectionStrategy, Component } from "@angular/core";
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

            <div class="col-10 offset-1 ">
                <div class="pb-4 row ">
                    <label for="" class="fz-20 text-mist">ชื่อ</label>
                    <div class="col-12 d-flex gap-4 pt-0 fz-16 ">
                        <input type="text" placeholder="ยังไม่ยืนยันตัวตน" class="px-3 w-100 hh-45 border rounded">
                        <button (click)="routerService.navigation('/e-kyc')" class="btn btn-namer ff-kr text-white h-100 pt-1" style="min-width: 204px">เริ่มการยืนยันตัวตน</button>
                    </div>
                </div>
                <div class="pb-4 row">
                <label for="" class="fz-20 text-mist">บัญชีธนาคาร</label>
                <div class="col-12 d-flex gap-4 pt-0 fz-16">
                    <input type="text" placeholder="ยังไม่ยืนยันตัวตน" class="px-3 w-100 hh-45 border rounded">
                    <button (click)="routerService.navigation('/bank-account')" class="btn btn-namer ff-kr text-white h-100 pt-1" style="min-width: 204px">เริ่มการยืนยันบัญชีธนาคาร</button>
                </div>
                </div>
                <div class="pb-4 row">
                    <label for="" class="fz-20 text-mist">เบอร์มือถือ</label>
                    <div class="col-12 d-flex gap-4 pt-0 fz-16">
                        <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border w-100 rounded">
                    </div>
                </div>
                <div class="pb-4 row">
                    <label for="" class="fz-20 text-mist">อีเมล</label>
                    <div class="col-12 d-flex gap-4 pt-0 fz-16">
                        <!-- <input type="text" placeholder="กรุณายืนยันตัวตน" class="px-3 hh-45 border w-100 rounded"> -->
                        <input type="email" placeholder="lhcdemotrading@gmail.com" class="px-3 w-100 hh-45 border rounded">
                    </div>
                </div>
            </div>



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
    `],
    providers: [RouterService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSettingComponent {
    constructor(protected routerService: RouterService) {}
}