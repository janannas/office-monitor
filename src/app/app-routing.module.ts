import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { houseDetailsComponent } from "./components/house-details/house-details.component";
import { DetailsComponent } from "./components/details/details.component";

const routes: Routes = [
  //{ path: "house/:id", component: DetailsComponent },
  { path: "homes/:id", component: houseDetailsComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
