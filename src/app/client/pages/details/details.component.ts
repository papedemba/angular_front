import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from '../../shared/models/produits';
import { ProduitsService } from '../../shared/service/produits.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  produits$ : Observable<Produits[]>|null=null

@Input('produit') produits :Produits|null=null

  constructor(private prod :ProduitsService) { }

  ngOnInit(): void {
    
  }

}
