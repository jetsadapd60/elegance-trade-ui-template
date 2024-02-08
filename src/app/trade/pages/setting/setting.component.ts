import { Component } from '@angular/core';
import { MemberIdService } from 'src/app/services/member-id.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-setting',
  template: `


    <div class="row">
      <div class="col-4">
        <div class="card border-gold overflow-hidden rounded-4">
          <div class="card-body py-4 pe-0">
            <div class="row">
              <div class="col-1"></div>

              <div class="col-11 rounded-start-4 px-0 bg-beluga">
                <ul class="list-inline p-0 list-style-none">
                  <li class="align-items-center d-flex flex-column pt-4">

                    <div class="bg-wolf hh-96 rounded-circle ww-96 overflow-hidden d-flex align-items-center justify-content-center">
                      <!-- <img src="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" width="100" alt=""> -->
                      <img [src]="profileService.profileImage|async" width="50" alt="">
                    </div>

                    <p class="my-2 fz-16 text-homeworld">แก้ไขรูปโปรไฟล์</p>

                  </li>
                  <li class="ps-4 mt-3 mb-3">
                      <p class="mb-1 ff-16 text-maud ff-mm">ID: {{ memberIdService.memberId$|async }}</p>
                      <p class="mb-0 ff-16 text-warning ff-km">{{ profileService.fullName|async }}</p>
                  </li>
                  <li class=""><a routerLink="/setting" routerLinkActive="link-active" [routerLinkActiveOptions]="{exact:true}"  class="ps-4 d-flex align-items-center link text-decoration-none fz-20 ff-kl text-mist d-block hh-50">ต้ังค่าบัญชี</a></li>
                  <li class=""><a routerLink="/setting/manage-password" routerLinkActive="link-active" [routerLinkActiveOptions]="{exact:true}" class="ps-4 d-flex align-items-center link text-decoration-none fz-20 ff-kl text-mist d-block hh-50">รหัสผ่าน</a></li>
                  <li class=""><a routerLink="/setting/manage-pin" routerLinkActive="link-active" [routerLinkActiveOptions]="{exact:true}"  class="ps-4 d-flex align-items-center link text-decoration-none fz-20 ff-kl text-mist d-block hh-50">รหัส PIN</a></li>
                  <li class=""><a routerLink="/setting/notification" routerLinkActive="link-active" [routerLinkActiveOptions]="{exact:true}"  class="ps-4 d-flex align-items-center link text-decoration-none fz-20 ff-kl text-mist d-block hh-50">การแจ้งเตือน</a></li>
                  <li class=""><a routerLink="/setting/about-us" routerLinkActive="link-active" [routerLinkActiveOptions]="{exact:true}"  class="ps-4 d-flex align-items-center link text-decoration-none fz-20 ff-kl text-mist d-block hh-50">เกี่ยวกับเรา</a></li>
                  <li class=""><a routerLink="/setting/contact-us" routerLinkActive="link-active" [routerLinkActiveOptions]="{exact:true}"  class="ps-4 d-flex align-items-center link text-decoration-none fz-20 ff-kl text-mist d-block hh-50">ติดต่อเรา</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="card border-gold rounded-4">
          <div class="card-body p-5 text-homeworld">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>



  `,
  styles: [
    `
    
        a {
          transition: all .3s;
          position: relative;
        }
        
        .link-active {
          transition: all .3s;
          background: #D9D9D9 !important;
          /* color: #fff !important; */
          &::after {
            content: '';
            position: absolute;
            top: 0px;
            left: -5px;
            width: 5px;
            height: 100%;
            background: #FFC455;
          }

        }
    
    
    `
  ]
})
export class SettingComponent {

  constructor(public profileService: ProfileService, public memberIdService: MemberIdService) {}

}
