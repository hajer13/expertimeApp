import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CampaignDetailComponent } from "./campaign-detail/campaign-detail.component";
import { CampaignsComponent } from "./campaigns.component";

const routes: Routes = [
  {
    path: "",
    component: CampaignsComponent,
    children: [
      {
        path: "detail",
        component: CampaignDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignsRoutingModule {}
