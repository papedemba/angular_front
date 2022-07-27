import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from '../../shared/models/produits';
import { ProduitsService } from '../../shared/service/produits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 produits$ : Observable<Produits[]>|null=null
  constructor(private prod :ProduitsService) { }
  

  ngOnInit(): void {
    this.produits$=this.prod.All()
  }

}
