import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';
import { DetalhePokemonsComponent } from './detalhe-pokemons/detalhe-pokemons.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ListarPokemonsComponent, DetalhePokemonsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PokemonsRoutingModule,
    NgxPaginationModule,
    BrowserModule,
  ],
  exports: [ListarPokemonsComponent, DetalhePokemonsComponent],
})
export class PokemonsModule {}
