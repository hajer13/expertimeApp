import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CampaignsModule } from "./campaigns/campaigns.module";
import { PipesModule } from "./pipes/pipes.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CampaignsModule, PipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
