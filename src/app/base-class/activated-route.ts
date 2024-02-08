import { ActivatedRoute, Data } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

export class ActivatedRouteModel {

    constructor(protected activatedRoute: ActivatedRoute) {}

    get data() {
        return this.activatedRoute.snapshot.data;
    }

    get data$(): Observable<Data> {
        return this.activatedRoute.data;
    }
}