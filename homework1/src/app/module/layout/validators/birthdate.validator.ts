import { AbstractControl, ValidationErrors } from "@angular/forms";

export class BirthdateValidator {
  static invalidBirthdate(control: AbstractControl): ValidationErrors | null {
    const invalidDate = {
      invalidDate: true
    };

    const date = new Date();
    date.setDate(date.getDate() - 1);
    const birthDate = new Date(control.value);
    const isValidDate = birthDate.getTime() < date.getTime();

    return isValidDate ? null : invalidDate;
  }
}
