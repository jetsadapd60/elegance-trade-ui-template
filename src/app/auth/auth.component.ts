import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TestService } from "../services/test.service";

@Component({
    selector: 'app-auth',
    template: `
            <img src="assets/images/bubble.svg" alt="">
            <div class="wrap">
                <router-outlet></router-outlet>
            </div>
    `,
    styles: [`
    
    :host {
            display             : block;
            background          : linear-gradient(180deg, var(--color-brown-top) 0%, var(--color-brown-bottom) 100%);
            width               : 100%;
            height              : 100%;

            position            : relative;
            z-index             : 1;
        }

        img {
                width           : 100%;
                height          : auto;
                bottom          : 0px;
                position        : absolute;
                mix-blend-mode  : overlay;
                z-index         : 2;
            }

        .wrap {
                position        : absolute;
                width           : 100%;
                height          : 100%;
                z-index         : 3;
        }

    `],
    providers: [TestService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
    constructor(private testService: TestService) {
        console.log(this.testService.url)
    }
}