import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';

const routes: Routes = [
  { path: '', component: ListarPokemonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
