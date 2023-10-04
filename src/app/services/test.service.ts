import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class TestService {
    constructor(private router: Router) {}

    get url(): string {
        return this.router.url;
    }
}