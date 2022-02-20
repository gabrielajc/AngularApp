import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthModel } from '../models/auth.model';

import jwt_decode from 'jwt-decode';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi = `${environment.urlApiGp}/usuarios/auth-token`
  constructor(private http: HttpClient) { }

  autenticar(email: string, senha: string){
    let authModel : AuthModel = {
      email: email,
      senha:senha
    }
    return this.http.post(this.urlApi, authModel );
  }

  isAutenticado() : boolean{
    //let isAutenticado = localStorage.getItem('autenticado');
    let isAutenticado = localStorage.getItem('localFrontend');

    //this.decodeAuthToken();
    return ( (isAutenticado === 'false' || isAutenticado == null )? false:true);
  }

  decodeAuthToken(){

    let decode : TokenModel = new TokenModel();

    const ls = localStorage.getItem('localFrontend');

    if (ls){
      //console.log(ls )
      const jsonLs = JSON.parse(String(ls))

      const token = jsonLs.token;

      decode = jwt_decode(token);

      //console.log(decode)
    }

    return decode;
  }

  isAdmin() : boolean{
    let scopes = this.decodeAuthToken().scopes;

    return (scopes?.includes("ROLE_ADMIN"));
  }

  isTeacher() : boolean{
    let scopes = this.decodeAuthToken().scopes;

    return (scopes?.includes("ROLE_TEACHER"));
  }
}
