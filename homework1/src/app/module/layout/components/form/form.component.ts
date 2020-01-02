//import { PasswordMatch } from "./../../validators/passwordMatch.validator";
import { PhoneValidator } from "./../../validators/phone.validator";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Gender } from "../../models/gender";
import { genders } from "../../mock/genders.mock";
import { Country } from "../../models/country";
import { countries } from "../../mock/countries.mock";
import { BirthdateValidator } from "../../validators/birthdate.validator";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  arrGenders: Array<Gender> = genders;
  arrCountries: Array<Country> = countries;
  selectedCountry: string;
  selectedStates: Array<string>;

  form = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15)
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl("", [Validators.required]),
    phone: new FormControl("", [
      Validators.required,
      PhoneValidator.cannotContainLetters
    ]),
    birthDate: new FormControl("", [
      Validators.required,
      BirthdateValidator.invalidBirthdate
    ]),
    gender: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    agree: new FormControl("", Validators.required)
  });

  get name() {
    return this.form.get("name");
  }

  get lastName() {
    return this.form.get("lastName");
  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }

  get country() {
    return this.form.get("country");
  }

  get state() {
    return this.form.get("state");
  }

  get birthDate() {
    return this.form.get("birthDate");
  }

  get phone() {
    return this.form.get("phone");
  }
  get gender() {
    return this.form.get("gender");
  }

  get agree() {
    return this.form.get("agree");
  }

  onSelected(country: string) {
    if (country) {
      this.selectedCountry = country;
      this.arrCountries
        .filter(countryItem => {
          return countryItem.country === country;
        })
        .map(stateItem => {
          if (stateItem.states) {
            this.selectedStates = stateItem.states;
          }
        });
    }
  }
  constructor() {}

  ngOnInit() {
    console.log(this.selectedCountry, this.selectedStates);
  }
}
