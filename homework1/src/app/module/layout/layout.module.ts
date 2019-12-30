import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { FormComponent } from "./form/form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [LayoutComponent, FormComponent],
  imports: [CommonModule, FormsModule],
  exports: [LayoutComponent, FormComponent]
})
export class LayoutModule {}
