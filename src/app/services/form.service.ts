import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable()
export class FormService {
    private form!: FormGroup;
    constructor(private formBuilder: FormBuilder) {
    }

    createFrom(form: FormGroup) {
        if(!this.form) {
            this.form = form;
        }
    }
}