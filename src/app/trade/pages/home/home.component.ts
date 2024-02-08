import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { StatusLoggedInService } from 'src/app/services/status-logged-in.service';

// declare const TradingView: any;

@Component({
  selector: 'app-home',
  template: `

    <user-marketing-page *ngIf="statusLogInService.isPureMarketingLoggedIn || statusLogInService.isPureMarketingLoggedIn"></user-marketing-page>

    <user-page *ngIf="statusLogInService.isUserLoggedIn"></user-page>



  `,
  styles: [`
      
  `]
})
export class HomeComponent {
  constructor(public statusLogInService: StatusLoggedInService, private profileService: ProfileService) {}
}
