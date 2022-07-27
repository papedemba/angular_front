import { Component, Input, OnInit } from '@angular/core';
import { Produits } from '../../shared/models/produits';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input('produit') produits :Produits|null=null
  constructor() { }

  ngOnInit(): void {
  }

}
