import { AfterViewInit, CSP_NONCE, Component } from "@angular/core";
import { NotiSettingModel } from "src/app/models/noti-setting.model";
import { ConfigService } from "src/app/services/config.service";
import { MemberIdService } from "src/app/services/member-id.service";
import { NotiSettingService } from "src/app/services/noti-setting.service";
import { TokenUserService } from "src/app/services/token-user.service";

@Component({
    selector: 'notification',
    template: `
    
    <div class="account row">

        <div class="col-10 text-center offset-1 ">
            <img src="assets/images/image-manage-noti.svg" style="max-width: 350px;" alt="">
        </div>

        <div class="col-10 offset-1">
            <p class="fz-24 text-warning">การแจ้งเตือน</p>
        </div>

        <div class="col-10 offset-1">
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">แจ้งเตือนคำสั่งซื้อขาย</p>
                <switches (onSwitches)="onSwitchedBuySellNoti($event)"></switches>
            </div>
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">แจ้งเตือนเคลียริ่ง</p>
                <switches (onSwitches)="onSwitchedClearingNoti($event)"></switches>
            </div>
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">แจ้งเตือนจากระบบ</p>
                <switches (onSwitches)="onSwitchedSystemNoti($event)"></switches>
            </div>
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">ข่าวสาร</p>
                <switches (onSwitches)="onSwitchedNewsNoti($event)"></switches>
            </div>
            <div class="border-bottom py-2 d-flex align-items-center justify-content-between">
                <p class="m-0 text-mist fz-20">เสียงแจ้งเตือน</p>
                <switches (onSwitches)="onSwitchedSoundNoti($event)"></switches>
            </div>
        </div>



    </div>


    
    `,
    styles: []
})
export class NotificationComponent implements AfterViewInit {

    notiSetting: NotiSettingModel = {
        MemberId      : "",
        NotiBuySell   : false,
        NotiClearing  : false,
        NotiSystem    : false,
        NotiNews      : false
    };

    constructor(
            private notiSettingService: NotiSettingService, 
            private tokenUserService: TokenUserService, 
            private memberIdService: MemberIdService) {
    }
    
    ngAfterViewInit(): void {
        const next = (memberId: any) => {
            if(memberId !== "000000") {
                this.notiSetting.MemberId = memberId;
                
                this.updateNotiSetting();

            }
        }
        this.memberIdService.memberId$.subscribe({ next })
    }

    updateNotiSetting() {
        if(this.tokenUserService.accessToken) 
            this.notiSettingService.load(
                this.notiSetting, this.tokenUserService.accessToken
                ).subscribe(i=>console.log(i));
    }

    onSwitchedBuySellNoti(event: boolean) {
        this.notiSetting.NotiBuySell = event;
        this.updateNotiSetting();
    }

    onSwitchedClearingNoti(event: boolean) {
        this.notiSetting.NotiClearing = event;
        this.updateNotiSetting();
    }

    onSwitchedSystemNoti(event: boolean) {
        this.notiSetting.NotiSystem = event;
        this.updateNotiSetting();
    }

    onSwitchedNewsNoti(event: boolean) {
        this.notiSetting.NotiNews = event;
        this.updateNotiSetting();
    }

    onSwitchedSoundNoti(event: any) {
        console.log(event)
    }

}