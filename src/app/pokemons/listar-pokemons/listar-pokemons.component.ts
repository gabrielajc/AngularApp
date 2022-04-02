import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
@Component({
  selector: 'app-listar-pokemons',
  templateUrl: './listar-pokemons.component.html',
  styleUrls: ['./listar-pokemons.component.css'],
})
export class ListarPokemonsComponent implements OnInit {
  pokemonSelecionadoPai: any = null;
  diaDeHoje: Date;
  pokemons: any = null;
  offset: number = 0;
  limit: number = 30;

  opcoes = [10, 20, 30, 40, 50, 1000];

  constructor(private pokemonService: PokemonsService) {
    this.diaDeHoje = new Date();
  }

  ngOnInit(): void {
    //this.http.get("https://pokeapi.co/api/v2/pokemon")
    this.pokemonService.getAll().subscribe((response) => {
      this.pokemons = response;
    });
  }

  onSelecionarClick(results: any) {
    this.pokemonSelecionadoPai = results;
  }

  receberIdFilho(variavel: any) {
    alert('O ID do Filho é ' + variavel);
  }

  letrasMaiusculas(texto: any) {
    return texto.toUpperCase();
  }

  anterior() {
    this.offset -= this.limit;
    if (this.offset < 0) {
      this.offset = 0;
    }

    console.log(this.offset, this.limit);
    this.pokemonService
      .getPaginado(this.offset, this.limit)
      .subscribe((dados: any) => {
        this.pokemons = dados;
      });
  }

  proximo() {
    // se o offset atual + limit for menor que 1118 (num max pokemons)
    if (this.offset + this.limit <= this.pokemons?.count) {
      this.offset += this.limit;
    }

    console.log(this.offset, this.limit);
    this.pokemonService
      .getPaginado(this.offset, this.limit)
      .subscribe((dados: any) => {
        this.pokemons = dados;
      });
  }

  onSelectClick(value: any) {
    console.log(value);
  }

  onSelectChange() {
    this.pokemonService
      .getPaginado(this.offset, this.limit)
      .subscribe((dados: any) => {
        this.pokemons = dados;
      });
  }

  isAnteriorDisabled() {
    return this.offset <= 0;
  }
  isProximoDisabled() {
    return this.offset + this.limit > this.pokemons?.count;
  }

  addMaisOpcoes() {
    this.opcoes.push(500);
  }

  calcularNumPagina() {
    let total = this.pokemons?.count;

    let paginas = 0;

    paginas =
      total % this.limit == 0 ? total / this.limit : total / this.limit + 1;
  }
}
