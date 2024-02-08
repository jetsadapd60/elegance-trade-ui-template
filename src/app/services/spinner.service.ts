import { Injectable } from "@angular/core";
import { Observable, Subject, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SpinnerService {
    private spinner = new Subject<boolean>();

    spinner$(): Observable<boolean> {
        return this.spinner.asObservable();
    }

    open() {
        this.spinner.next(true);
    }

    close() {
        this.spinner.next(false);
    }
}