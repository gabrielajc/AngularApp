import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup(
    {
      email : new FormControl(),
      senha : new FormControl()
    }
  );

  constructor(
    private fb : FormBuilder,
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(){

    this.authService.autenticar(this.meuForm.value.email, this.meuForm.value.senha)
      .subscribe({
        next: (response : any)=> {
          console.log(response)
          // if (response == true){
          //   localStorage.setItem('autenticado', 'true');
          //   this.router.navigate(['/professores'])
          // }
          if (response != false){
            localStorage.setItem('localFrontend', JSON.stringify(response));
            this.router.navigate(['/professores'])
          }
        }
      })
  }

  private createForm(){
    this.meuForm = this.fb.group({
      email : [ '' , [ Validators.required, Validators.minLength(5), Validators.email ] ],
      senha : [ '', [ Validators.required ]]
    });
  }

}
