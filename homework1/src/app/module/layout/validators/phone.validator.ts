import { AbstractControl } from "@angular/forms";

export class PhoneValidator {
  static cannotContainLetters(control: AbstractControl) {
    const invalidPhoneFormat = {
      invalidPhoneFormat: true
    };

    if (isNaN(control.value)) {
      return invalidPhoneFormat;
    }

    const phone = String(control.value);
    const digitExpression = /([0-9])*\d/g;
    const characterExpression = /[^[A-z\s\d][\\\^]*/g;
    const isPhoneNumber =
      (phone.match(digitExpression), !phone.match(characterExpression));

    return isPhoneNumber ? null : invalidPhoneFormat;
  }

  static maxLength(control: AbstractControl) {}
}
