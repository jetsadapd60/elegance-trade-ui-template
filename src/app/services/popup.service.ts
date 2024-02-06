import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

type PopupType = 'complete' | 'warning' | 'error';
type Confirm = () => void; 

export interface Popup {
    type: PopupType;
    icon: PopupType;
    textHead: 'สำเร็จ' | 'ไม่สำเร็จ';
    disc: string;
    btnLabel: string;
    confirm: Confirm;
}

@Injectable({providedIn: 'root'})
export class PopupService {
    private popup = new BehaviorSubject<Popup|undefined>(undefined);

    popup$(): Observable<Popup|undefined> {
        return this.popup.asObservable();
    }

    open(dataPopup: Popup) {
        this.popup.next(undefined);
        this.setPopup(dataPopup);
    }

    private setPopup(dataPopup: Popup) {
        this.popup.next({
            type: dataPopup.type,
            disc: dataPopup.disc,
            icon: dataPopup.icon,
            btnLabel: dataPopup.btnLabel,
            textHead: dataPopup.textHead,
            confirm: () => {
                dataPopup.confirm();
                this.popup.next(undefined);
            }
        });
    }

    
}