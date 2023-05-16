// import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { CursosGuard } from './guards/cursos.guard';
// import { AlunosGuard } from './guards/alunos.guard';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"

import { HomeComponent } from "./home/home.component";
// import { CursosComponent } from "./cursos/cursos.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth-guard";
import { AlunosComponent } from "./alunos/alunos.component";
// import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
// import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
// import { AuthGuard } from './guards/auth.guard';





const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('../app/cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'alunos',
  //   component: AlunosComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'alunos',
  //   loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule),
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }


  // { path: 'cursos/:id', component: CursoDetalheComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
