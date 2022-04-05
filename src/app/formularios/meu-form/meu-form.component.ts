import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormulariosService } from '../formularios.service';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css'],
})
export class MeuFormComponent implements OnInit {
  meuForm: FormGroup = new FormGroup({
    email: new FormControl(),
    nome: new FormControl(),
    checkme: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private formularioService: FormulariosService
  ) {}

  ngOnInit(): void {
    this.meuForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(5), Validators.email],
      ],
      nome: ['', [Validators.required]],
      checkme: ['', []],
    });
    console.log(this.meuForm);
  }

  getControl(control: string) {
    return this.meuForm.get(control);
  }

  isValid(control: string) {
    return (
      this.getControl(control)?.valid == false &&
      this.getControl(control)?.touched
    );
  }

  onSubmit() {
    console.log(this.meuForm.value);
    this.formularioService
      .salvar(this.meuForm.value)
      .subscribe((resposta: any) => {
        console.log(resposta);
      });
  }
}
