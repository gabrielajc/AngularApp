import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-listar-professores',
  templateUrl: './listar-professores.component.html',
  styleUrls: ['./listar-professores.component.css']
})
export class ListarProfessoresComponent implements OnInit {

  professores : any ;

  constructor(private professorService:ProfessoresService ) { 
  }

  ngOnInit(): void {
    this.retornarTodos();
  }

  onApagarClick(professor: any){
    console.log(professor)
    this.professorService.deletar(professor.id)
      .subscribe(
        ()=> {
          let index = this.professores.findIndex( (obj:any) =>  professor.id == obj.id );
          this.professores.splice(index,1);
          alert(`Professor ${professor.id} deletado com sucesso` );
        }
      );
  }

  retornarTodos(){
    this.professorService.getAll()
    .subscribe(
        (dados)=>{
          this.professores = dados;
          //console.log(dados)
        }
      );
  }

}