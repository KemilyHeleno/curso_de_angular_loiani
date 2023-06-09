import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
  // { path: 'novo', component: AlunoFormComponent },
  // { path: ':id', component: AlunoDetalheComponent },
  // { path: ':id/editar', component: AlunoFormComponent },
  // { path: '', component: AlunosComponent },
  {
    path: '', component: AlunosComponent,
    // canActivatedChild: [AlunosGuard],
    children: [
      {
        path: 'novo', component: AlunoFormComponent,
        // canActivatedChild: [AlunosGuard]
      },
      {
        path: ':id', component: AlunoDetalheComponent,
        // canActivatedChild: [AlunosGuard],
        resolve: { aluno: AlunoDetalheResolver }
      },
      {
        path: ':id/editar', component: AlunoFormComponent,
        // canActivatedChild: [AlunosGuard],
        canDeactivate: [AlunosDeactivateGuard]
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
