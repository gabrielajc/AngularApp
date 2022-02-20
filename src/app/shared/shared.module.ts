import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrifaTextoDirective } from './diretivas/grifa-texto.directive';
import { CpfPipe } from './pipes/cpf.pipe';
import { DebugFormComponent } from './componentes/debug-form/debug-form.component';
import { FieldErrorComponent } from './componentes/field-error/field-error.component';

@NgModule({
  declarations: [
    GrifaTextoDirective,
    CpfPipe,
    DebugFormComponent,
    FieldErrorComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [
    HttpClientModule,
    FormsModule,
    GrifaTextoDirective,
    DebugFormComponent,
    CpfPipe,
    ReactiveFormsModule,
    FieldErrorComponent,
  ],
})
export class SharedModule {}
