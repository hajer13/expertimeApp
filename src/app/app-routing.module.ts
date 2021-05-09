import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "campaigns", pathMatch: "full" },
  {
    path: "campaigns",
    loadChildren: "./campaigns/campaigns.module#CampaignsModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
