import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthCommponent } from "./auth.component";

@NgModule({
    declarations: [AuthCommponent],
    imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}