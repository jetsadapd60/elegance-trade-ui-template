import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AccountComponent } from "./account.component";
import { AccountRoutingModule } from "./account-rounting.module";

@NgModule({
    declarations: [AccountComponent],
    imports: [SharedModule, AccountRoutingModule],
})
export class AccountModule {}