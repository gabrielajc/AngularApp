import { UsuariosService } from './../usuarios.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
})
export class ListarUsuariosComponent implements OnInit {
  usuarioSelecionadoPai = null;
  seEhMaiorQue18: boolean = false;
  id: number = 0

  usuarios : any = []

  constructor(public usuariosService: UsuariosService) {}


  ngOnInit(): void {
    this.usuariosService.getAll()
    .subscribe(
      (dados) =>{
        console.log(dados)
        this.usuarios = dados;
        this.retornarTodos();
      }
    )


  }  
  
  onApagarClick(usuario: any){
    console.log(usuario)
    this.usuariosService.deletar(usuario.id)
      .subscribe(
        ()=> {
          let index = this.usuarios.findIndex( (obj:any) =>  usuario.id == obj.id );
          this.usuarios.splice(index,1);
          alert(`Professor ${usuario.id} deletado com sucesso` );
        }
      );
  }


  onUsuarioClick(dados: any) {
    console.log(dados);
    this.usuarioSelecionadoPai = dados;
  }

  metodoDoPai(evento: any) {
    console.log('método do pai....', evento);
    this.seEhMaiorQue18 = evento;
  }

  retornarTodos(){
    this.usuariosService.getAll()
    .subscribe(
        (dados)=>{
          this.usuarios = dados;
          //console.log(dados)
        }
      );
  }

}
