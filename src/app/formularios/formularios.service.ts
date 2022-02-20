import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor(private http: HttpClient) { }

  salvar(body: any){
    return this.http.post("http://cursos.grandeporte.com.br:8080/professores",body)
  }
}