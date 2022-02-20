

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from 'src/app/shared/services/cep.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  id : number = 0;

  meuForm: FormGroup = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    senha: new FormControl(),
    senhaconfirmacao: new FormControl(),
    cep: new FormControl(),
    logradouro: new FormControl(),
    numero: new FormControl(),
    complemento: new FormControl(),
    cidade: new FormControl(),
    bairro: new FormControl(),
    estado: new FormControl(),
    cpf: new FormControl(),
    datanascimento: new FormControl(),
    celular: new FormControl(),
    telefone: new FormControl(),



    

  })


  constructor(
    private router : Router, 
    private activatedRoute : ActivatedRoute,
    private usuariosService: UsuariosService,
    private fb: FormBuilder,
    private cepService: CepService
    ) { }
 buscarCEP(){
    console.log(this.meuForm.value.cep)
    this.cepService.consultar(this.meuForm.value.cep)
      .subscribe(
        {
          next : (result : any) => {
            this.meuForm.patchValue({
              logradouro : result.logradouro,
              cidade : result.localidade,
              bairro : result.bairro,
              estado : result.uf
            });
          },
          error: (erro) => {
            alert("CEP Inválido");
            this.meuForm.patchValue({
              logradouro : null,
              cidade : null,
              bairro : null,
              estado : null
            });
          }
        }
         
        
      );
  }
  

  ngOnInit(): void {
    console.log(this.activatedRoute)


    this.activatedRoute.params
    .subscribe((parametros: any)=>{
      console.log(parametros)
      //Edita
      if (parametros.id){
        this.id = parametros.id;
        this.usuariosService.getOne(parametros.id)
          .subscribe(
            (resposta)=>{
              console.log(resposta)
              this.meuForm.patchValue(resposta)
            }
          )
      
          }
    })
    this.meuForm = this.fb.group({
      nome: ['', [Validators.required]],
      email:['',[Validators.required] ], 
      senha:['',[Validators.required] ], 
      tipo_usuario:['',[Validators.required] ], 
      cep:['',[Validators.required] ], 
      logradouro:['',[Validators.required] ], 
      numero:['',[Validators.required] ], 
      complemento:['',[Validators.required] ], 
      cidade:['',[Validators.required] ], 
      bairro:['',[Validators.required] ], 
      estado:['',[Validators.required] ],

    })


  }
getControl(control : string){
  return this.meuForm.get(control);

}
isValid(control :string){
  return (this.getControl(control)?.valid == false && this.getControl(control)?.touched)

}
get name() { return this.meuForm.get('email'); }


onSubmit(){
  if(this.id > 0){
    this.usuariosService.update(this.id, this.meuForm.value)  
    .subscribe( 
      (dados)=>{
        console.log(dados);
        alert(` Atualizado com sucesso!`)
        this.meuForm.reset();
        this.router.navigate(['/listar-usuarios'])
    }

  );
    
  }   else{
    this.usuariosService.salvar(this.meuForm.value)
    .subscribe (
      (resposta: any)=>{
        alert(`Usuário cadastrado com sucesso!`)
        console.log(resposta)
        this.meuForm.reset();
      }
    );  



}
}
}