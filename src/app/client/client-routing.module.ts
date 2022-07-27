import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';

const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"details/:id", component:DetailsComponent},
  { path:"catalogue", component:CatalogueComponent},
  { path:"panier", component:PanierComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
