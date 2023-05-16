import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const alunosRoutes = [
  {
    path: '', component: AlunosComponent,
    // canActivatedChild: [AlunosGuard],
    children: [
      {
        path: 'novo', component:
          AlunoFormComponent
      },
      {
        path: ':id',
        component: AlunoDetalheComponent,
        /* resolve: { aluno: AlunoDetalheResolver }*/
      },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
        /* canDeactivate: [AlunosDeactivateGuard]*/
      },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
