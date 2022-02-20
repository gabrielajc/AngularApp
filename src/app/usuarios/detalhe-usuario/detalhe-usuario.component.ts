import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  @Input()
  usuarioSelecionadoDetalhe : any = null;

  @Output()
  emitirSeMaiorQue18 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPlusClick(){
    this.usuarioSelecionadoDetalhe.idade++;
    this.notificarSeMaiorQue18();
  }

  onLessClick(){
    this.usuarioSelecionadoDetalhe.idade--;
    this.notificarSeMaiorQue18();
  }

  notificarSeMaiorQue18(){
    if (this.usuarioSelecionadoDetalhe.idade >= 18 ){
      this.emitirSeMaiorQue18.emit(true)
    }else{
      this.emitirSeMaiorQue18.emit(false)
    }
  }



}