import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtpType, PersonType } from '../models/enum';

@Component({
  selector: 'base-component',
  template: ``,
  styles: [],
})
export class BaseComponent {
  // protected personSignUpType: PersonType;

/* The `protected isOtpMobile: boolean;` variable is declaring a protected property called
`isOtpMobile` of type boolean in the `BaseComponent` class. This property is used to store whether
the current URL includes the `OtpType.MOBLIE` value. */
  protected isOtpMobile: boolean;

/* The `protected url: string;` line is declaring a protected property called `url` of type string in
the `BaseComponent` class. This property is used to store the current URL of the application. */
  protected url: string;

/* The line `protected page: PersonType;` is declaring a protected property called `page` of type
`PersonType` in the `BaseComponent` class. This property is used to store the current page value,
which is obtained from the query parameters of the current route. */
  protected page: PersonType;

/**
 * The constructor initializes the router and activated route, and sets the url and isOtpMobile
 * properties based on the current url, and sets the page property based on the query parameter "page".
 * @param {Router} router - The `router` parameter is an instance of the `Router` class, which is used
 * for navigating between different routes in an Angular application.
 * @param {ActivatedRoute} atr - The `atr` parameter is an instance of the `ActivatedRoute` class. It
 * represents the currently activated route and contains information about the route's parameters,
 * query parameters, and other data associated with the route.
 */
  constructor(protected router: Router, protected atr: ActivatedRoute) {
    /* The line `const { url } = this.router;` is destructuring the `url` property from the
    `this.router` object. It is equivalent to `const url = this.router.url;`. */
    const { url } = this.router;
   /* The line `this.url = url;` is assigning the value of the `url` variable to the `url` property of
   the `BaseComponent` class. This is done to store the current URL of the application in the `url`
   property, so that it can be accessed and used within the class. */
    this.url = url;
/* The line `this.isOtpMobile = url.includes(OtpType.MOBLIE);` is assigning a value to the
`isOtpMobile` property of the `BaseComponent` class. */
    this.isOtpMobile = url.includes(OtpType.MOBLIE);

/* The code `const { page } = this.atr.snapshot.queryParams;` is destructuring the `page` property from
the `queryParams` object of the `ActivatedRoute` snapshot. It is equivalent to `const page =
this.atr.snapshot.queryParams.page;`. */
    const { page } = this.atr.snapshot.queryParams;
    this.page = page;
  }

/**
 * The function returns true if the page is of type "PERSONAL", otherwise it returns false.
 * @returns The method is returning a boolean value. If the value of `this.page` is equal to
 * `PersonType.PERSONAL`, then `true` is returned. Otherwise, `false` is returned.
 */
  protected get isPersonal() {
    return this.page === PersonType.PERSONAL ? true : false;
  }

/* The `navigation` method is a protected method in the `BaseComponent` class. It is used for
navigating to different routes within the application. */
  protected navigation(path: string):void;
  protected navigation(path: string, queryParams: string):void;
  protected navigation(path?: string, queryParams?: string) {
    if(path && !queryParams) this.router.navigateByUrl(`/auth/sign-up/${path}`);
    if(path && queryParams) {
      this.router.navigate([`/auth/sign-up/${path}`], {queryParams: {page: queryParams}})
    }
  }

 /**
  * The function "navigateToHome" navigates to the home page using the router.
  */
  protected navigateToHome() {
    this.router.navigateByUrl('/');
  }
}
