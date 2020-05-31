import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitTabComponent } from "./kit-tab/kit-tab.component";
import { KitTabsComponent } from "./kit-tabs.component";

@NgModule({
	declarations: [KitTabComponent, KitTabsComponent],
	imports: [CommonModule],
	exports: [KitTabComponent, KitTabsComponent],
	providers: [],
})
export class KitTabsModule {}
