import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up.component";
import { SharedModule } from "primeng/api";
import { SignUpRoutingModule } from "./sign-up-routing.module";

@NgModule({
    declarations: [SignUpComponent],
    imports: [SharedModule, SignUpRoutingModule],
    providers: []
})
export class SignUpModule {
    constructor() {console.log('sign-up module')}
}