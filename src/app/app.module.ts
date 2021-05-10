import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CampaignsModule } from "./campaigns/campaigns.module";
import { PipesModule } from "./pipes/pipes.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeFr, "fr");
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CampaignsModule,
    PipesModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
