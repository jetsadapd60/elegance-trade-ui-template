import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PopupComponent } from "./popup.component";
import { SharedModule } from "../shared/shared.module";
import { SpinnerComponent } from "./spinner.component";

@NgModule({
    declarations: [PopupComponent, SpinnerComponent],
    imports: [CommonModule, SharedModule],
    exports: [PopupComponent, SpinnerComponent],
})
export class CoreModule { }