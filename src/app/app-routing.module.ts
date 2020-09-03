import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from './pages/register/register.component';
import { SinglePosdcastComponent } from './pages/single-posdcast/single-posdcast.component';
import { PosdcastsCategoriesComponent } from './pages/posdcasts-categories/posdcasts-categories.component';
import { FeaturesComponent } from './pages/features/features.component';


const routes: Routes = [
  { path: "", component: FeaturesComponent},
  { path: "register", component: RegisterComponent},
  { path: "single-podcast", component: SinglePosdcastComponent},
  { path: "podcast-categories", component: PosdcastsCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
