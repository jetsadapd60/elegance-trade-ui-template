import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({providedIn: 'root'})
export class RouterService {

  constructor(private router: Router, private atr: ActivatedRoute) {}

  get url(): string {
    return this.router.url;
  }

  public navigation(path: string): void;
  public navigation(path: string, queryParams: string): void;
  public navigation(path?: string, queryParams?: string) {
    if (path && !queryParams) this.router.navigateByUrl(path);
    if (path && queryParams) {
      this.router.navigate([`path`], { queryParams: { page: queryParams } });
    }
  }

  get activatedRoute(): ActivatedRoute {
    return this.atr;
  }
}
