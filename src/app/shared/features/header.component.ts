import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <h3>
            <ng-content></ng-content>
        </h3>
    `,
    styles: [],
})
export class HeaderComponent {
    
}