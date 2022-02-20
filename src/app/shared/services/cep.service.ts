import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) {}

  consultar(cep: number){
    return this.http.get(`https://viacep.com.br/ws/01001000/json/`)
  }
}
