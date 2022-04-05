import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon");
  }

  getPaginado(offset: number, limit: number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit);
  }
}
