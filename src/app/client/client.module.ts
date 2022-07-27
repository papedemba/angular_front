import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AsideComponent } from './components/aside/aside.component';
import { CardComponent } from './components/card/card.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PanierComponent } from './pages/panier/panier.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    AsideComponent,
    CardComponent,
    CatalogueComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
