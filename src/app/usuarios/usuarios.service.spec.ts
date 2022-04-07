import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuariosService]
    });
    service = TestBed.inject(UsuariosService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getAll().subscribe(res => {
        expect(res).toEqual(res);
      });
      const req = httpTestingController.expectOne(
        'http://cursos.grandeporte.com.br:8080/usuarios'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(req);
      httpTestingController.verify();
    });
  });
});
