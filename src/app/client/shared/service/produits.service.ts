import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Produits } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private url : string = "http://localhost:3000/produits/"
  // urlburger=this.url+"burgers"

  constructor(private http : HttpClient) { 
    
  }
  All() : Observable<Produits[]>{
    return this.http.get<Produits[]>(this.url)
  }
  produits$ = (id:number) => {
    return this.http.get<Produits>(`${this.url}/${id}`)
  }
}
