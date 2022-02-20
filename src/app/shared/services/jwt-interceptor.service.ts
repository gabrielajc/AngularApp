import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const ls = localStorage.getItem('localFrontend');
    const jsonLs = JSON.parse(String(ls))

    if (!req.url.includes('viacep')){
      req = req.clone(
        {
          setHeaders: {
            Authorization : 'Bearer ' + jsonLs?.token
          }
        }
      );
    }

    return next.handle(req);
  }
}
