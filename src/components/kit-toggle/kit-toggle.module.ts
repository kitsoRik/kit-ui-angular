import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitToggleComponent } from "./kit-toggle.component";
import { KitToggleValueComponent } from "./kit-toggle-value/kit-toggle-value.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [KitToggleComponent, KitToggleValueComponent],
	imports: [CommonModule, FormsModule],
	exports: [KitToggleComponent, KitToggleValueComponent],
	providers: [],
})
export class KitToggleModule {}
