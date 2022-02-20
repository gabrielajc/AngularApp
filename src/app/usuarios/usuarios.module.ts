import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';

import { SharedModule } from '../shared/shared.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';

@NgModule({
  declarations: [ListarUsuariosComponent, DetalheUsuarioComponent, UsuariosFormComponent],


  imports: [CommonModule, 
    SharedModule, 
    UsuariosRoutingModule,
    HttpClientModule
  ],


  exports: [ListarUsuariosComponent],
})
export class UsuariosModule {}
