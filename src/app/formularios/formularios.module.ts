import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuFormComponent } from './meu-form/meu-form.component';
import { FormulariosRoutingModule } from './formularios-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MeuFormComponent],
  imports: [CommonModule, FormulariosRoutingModule, SharedModule],
  exports: [MeuFormComponent],
})
export class FormulariosModule {}
