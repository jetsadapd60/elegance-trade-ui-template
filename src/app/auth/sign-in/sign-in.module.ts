import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    SharedModule,
    SignInRoutingModule,
  ],
})
export class SignInModule {}
