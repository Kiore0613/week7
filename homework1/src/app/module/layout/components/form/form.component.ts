import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", [
      Validators.maxLength(4),
      Validators.minLength(15),
      Validators.required
    ])
  });
  constructor() {}

  ngOnInit() {}
}
