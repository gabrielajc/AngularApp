import { Component, Input,Output, OnInit, EventEmitter, OnChanges,  } from '@angular/core';

@Component({
  selector: 'app-detalhe-pokemons',
  templateUrl: './detalhe-pokemons.component.html',
  styleUrls: ['./detalhe-pokemons.component.css']
})
export class DetalhePokemonsComponent implements OnInit, OnChanges {

  @Input()
  pokemonSelecionadoDetalhe : any = null;
  @Output() 
  emitirIdPokemon = new EventEmitter();

  constructor() { }

 ngOnChanges(): void {
  console.log(this.pokemonSelecionadoDetalhe)

  let id = this.extrairIdUrl(this.pokemonSelecionadoDetalhe.url);
  this.emitirIdPokemon.emit(id);
  }

  
  ngOnInit(): void {
    
  }

  extrairIdUrl(url:any){
    let fields = url.split('/')
    console.log(fields)
    let id = fields[fields.length - 2];
    return id;

  }
  

}
