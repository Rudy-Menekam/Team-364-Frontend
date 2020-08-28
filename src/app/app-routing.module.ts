import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SinglePosdcastComponent } from './pages/single-posdcast/single-posdcast.component';
import { PosdcastsCategoriesComponent } from './pages/posdcasts-categories/posdcasts-categories.component';
import { PosdcastsListComponent } from './pages/posdcasts-list/posdcasts-list.component';


const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "single-podcast", component: SinglePosdcastComponent},
  { path: "podcast-categories", component: PosdcastsCategoriesComponent},
  { path: "podcast-list", component: PosdcastsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
