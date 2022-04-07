import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let component: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('isAdmin', () => {
    it('makes expected calls', () => {
      spyOn(component, "decodeAuthToken").and.callThrough();
      service.isAdmin();
      expect(service.decodeAuthToken).toHaveBeenCalled();
    });
  });

  describe('isTeacher', () => {
    it('makes expected calls', () => {
      spyOn(component, "decodeAuthToken").and.callThrough();
      service.isTeacher();
      expect(service.decodeAuthToken).toHaveBeenCalled();
    });
  });
});
