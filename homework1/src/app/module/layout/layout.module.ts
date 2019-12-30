import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from "./components/layout/layout.component";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [LayoutComponent, FormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [LayoutComponent, FormComponent]
})
export class LayoutModule {}
