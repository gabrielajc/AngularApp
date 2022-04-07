import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ProfessoresService } from './professores.service';
import { get } from 'http';

describe('ProfessoresService', () => {
  let service: ProfessoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfessoresService]
    });
    service = TestBed.inject(ProfessoresService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getAll().subscribe(res => {
        expect(res).toEqual(httpTestingController);
      });
      const req = httpTestingController.expectOne(
        'http://cursos.grandeporte.com.br:8080/professores'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(get);
      httpTestingController.verify();
    });
  });
});
