import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { FormulariosService } from './formularios.service';

describe('FormulariosService', () => {
  let service: FormulariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormulariosService]
    });
    service = TestBed.inject(FormulariosService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
