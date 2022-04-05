import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfessoresService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('http://cursos.grandeporte.com.br:8080/professores');
  }

  deletar(id: number) {
    //return this.http.delete("http://cursos.grandeporte.com.br:8080/professores/"+id)
    return this.http.delete(
      `http://cursos.grandeporte.com.br:8080/professores/${id}`
    );
  }

  salvar(body: any) {
    return this.http.post(
      'http://cursos.grandeporte.com.br:8080/professores',
      body
    );
  }
  getOne(id: number) {
    return this.http.get(
      `http://cursos.grandeporte.com.br:8080/professores/${id}`
    );
  }
  update(id: number, body: any) {
    return this.http.patch(
      `http://cursos.grandeporte.com.br:8080/professores/${id}`,
      body
    );
  }
}
