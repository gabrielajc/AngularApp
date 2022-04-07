import { TestBed } from '@angular/core/testing';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { JwtInterceptorService } from './jwt-interceptor.service';

describe('JwtInterceptorService', () => {
  let service: JwtInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [JwtInterceptorService] });
    service = TestBed.inject(JwtInterceptorService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpRequestStub: HttpRequest<any> = <any>{};
      const httpHandlerStub: HttpHandler = <any>{};
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      spyOn(httpRequestStub, 'clone').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(httpRequestStub.clone).toHaveBeenCalled();
    });
  });
});
