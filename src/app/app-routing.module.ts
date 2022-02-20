import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { ListarPokemonsComponent } from './pokemons/listar-pokemons/listar-pokemons.component';

// só vai fazer o carregamento do modulo usuarios quando associado a usuarios idependentemente do que vem a seguir de parametro na url
const routes: Routes = [
  { path:'primeiro', component: MeuPrimeiroComponent },
  {path:'pokemons', component: ListarPokemonsComponent},

  { path : 'usuarios', loadChildren: ()=> import('./usuarios/usuarios.module').then(m => m.UsuariosModule)  },
  { path : 'formularios', loadChildren: ()=> import('./formularios/formularios.module').then(m => m.FormulariosModule)  },
  { path : 'pokemons', loadChildren: ()=> import('./pokemons/pokemons.module').then(m => m.PokemonsModule)  },
  { path : 'professores', loadChildren: ()=> import('./professores/professores.module').then(m => m.ProfessoresModule), canActivate: []  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
