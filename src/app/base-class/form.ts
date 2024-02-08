import { FormBuilder, FormGroup } from '@angular/forms';

export abstract class BaseForm {

  protected form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  abstract createForm(): FormGroup;

  resetFrom() {
    this.form.reset();
  }

  markAllAsTouched() {
    Object.values(this.form.contains).forEach((control) => {
      control.markAllAsTouched();
    });
  }
}
