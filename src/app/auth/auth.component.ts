import { Component } from "@angular/core";

@Component({
    selector: 'auth',
    template: `
            <img src="assets/images/bubble.svg" alt="">
            <router-outlet></router-outlet>
    `,
    styles: [`
    
    :host {
            display: block;
            /* align-items: center; */
            /* justify-content: center; */
            /* margin-left: auto; */
            background  : linear-gradient(180deg, var(--color-brown-top) 0%, var(--color-brown-bottom) 100%);
            width       : 100%;
            height      : 100%;

            position: relative;
        }

        img {
                width           : 100%;
                height          : auto;
                bottom          : 0px;
                position        : absolute;
                mix-blend-mode  : overlay;
            }

    `]
})
export class AuthCommponent {}