import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { MenuModel } from "src/app/models/menu.medel";

@Component({
    selector: 'app-menu',
    template: `
    
    <div class="container px-5">
    <div class="row">
      <div class="col-6 col-md-2 col-xl-2 mb-2 mb-xl-0 pb-0"  routerLink="{{menu.link}}"  *ngFor="let menu of menus">
        <div class="align-items-center d-flex justify-content-center menu-link py-2 text-center"  routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" type="button">
          <img class="pe-2" [src]="menu.icon" alt="">
          <span class="fz-20">{{menu.label}}</span>
        </div>
      </div>
      <div class="col-6 col-md-2 col-xl-2">
        <div class="row justify-content-end h-100 align-items-center gap-3 gap-xl-5 pe-4">
          <div class="col-2" type="button">
            <img src="assets/images/icons-menu/bell.svg" alt="">
          </div>
          <div class="col-2" type="button" (click)="click()">
            <img src="assets/images/icons-menu/signout.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
    
    `,
    styles: [`

    .active {
        background: rgb(253,255,254);
        background: linear-gradient(180deg, rgba(253,255,254,1) 0%, rgba(146,0,238,0) 100%);
    }
  
    .menu-link {
        color: var(--color-chianti);
        font-size: 1rem;
    }

    .badge {
        width: 30px;
        height: 30px;
        top: 5px;
        right: -25px;
        font-size: .8rem;
    }



`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
    @Input('menus') menus: MenuModel[] = [];

    @Output('onClick') onClick = new EventEmitter<void>();

    click() {
        this.onClick.emit();
    }
}