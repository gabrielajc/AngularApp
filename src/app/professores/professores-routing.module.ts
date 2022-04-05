import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfessoresComponent } from './listar-professores/listar-professores.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

const routes: Routes = [
  { path: '', component: ListarProfessoresComponent },
  { path: 'new' ,component: ProfessorFormComponent  },
  { path: ':id' ,component: ProfessorFormComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessoresRoutingModule {}
