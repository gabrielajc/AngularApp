import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {

  //para guardar o ID que estou editando
  id : number = 0 ;

  meuForm : FormGroup = new FormGroup(
    {
      email : new FormControl(),
      nome : new FormControl(),
      checkme : new FormControl()
    }
  );

  constructor(
    private activatedRoute : ActivatedRoute,
    private fb : FormBuilder,
    private professorService : ProfessoresService,
    private router : Router) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute)

    this.meuForm = this.fb.group({
      email : [ '' , [ Validators.required, Validators.minLength(5), Validators.email ] ],
      nome : [ '', [ Validators.required ]],
      checkme : [ '', [] ]
    });

    this.activatedRoute.params
      .subscribe(
        (parametros : any)=>{
          console.log(parametros)

          // Edição
          if (parametros.id){
            //atualizar o id a ser editado
            this.id = parametros.id;

            this.professorService.getOne(parametros.id)
              .subscribe(
                (resposta)=>{
                  console.log(resposta)
                  this.meuForm.patchValue(resposta);
                }
              )
          }
          // Criação
          else {

          }
        }
      );
  }

  getControl(control : string){
    return this.meuForm.get(control);
  }

  isValid(control :string){
    return (this.getControl(control)?.valid == false && this.getControl(control)?.touched)
  }

  onSubmit(){
 
    // quando é edição
    if (this.id > 0){
      this.professorService.update(this.id, this.meuForm.value)
      .subscribe(
        (dados) => {
          console.log(dados);
          this.router.navigate(['/professores'])
        }
      );
    }
    // quando é criação
    else{
      this.professorService.salvar(this.meuForm.value)
      .subscribe(
        {
          next: (respota) => { this.router.navigate(['/professores']) },
          error: (e) => { alert('Erro ao Salvar') },
          complete : () => { console.log('acabou')}
        }
      );
    }
  }

}