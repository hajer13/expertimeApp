import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CampaignsRoutingModule } from "./campaigns-routing.module";
import { CampaignsComponent } from "./campaigns.component";
import { CampaignDetailComponent } from "./campaign-detail/campaign-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

@NgModule({
  declarations: [CampaignsComponent, CampaignDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CampaignsRoutingModule,
    BsDatepickerModule.forRoot(),
  ],
})
export class CampaignsModule {}
