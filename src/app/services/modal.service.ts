import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Modal } from '../models/modal.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
  /* The line `private modalData = new Subject<Modal | undefined>();` is creating a private instance
  variable `modalData` of type `Subject<Modal | undefined>`. 
  */
  private modalData = new Subject<Modal | undefined>();

  constructor() {
    /* The `this.close();` statement is calling the `close()` method of the `ModalService` class. 
        This method sets the value of the `modalData` subject to `undefined`, effectively closing any open modal.
        It is called in the constructor of the `ModalService` class to ensure that the `modalData` subject
        is initialized with an initial value of `undefined`. 
        */
    this.close();
  }

  /**
   * The function returns an Observable that emits Modal objects or undefined values.
   * @returns The `get modal$()` method is returning an `Observable` of type `Modal | undefined`.
   */
  get modal$(): Observable<Modal | undefined> {
    return this.modalData.asObservable();
  }

  /**
   * The open function updates the modalData subject with the provided modal if it exists.
   * @param {Modal} modal - The parameter "modal" is of type "Modal".
   */
  open(modal: Modal) {
    if (modal) this.modalData.next(modal);
  }

  /**
   * The close function sets the value of the modalData subject to undefined.
   */
  close() {
    this.modalData.next(undefined);
  }
}
