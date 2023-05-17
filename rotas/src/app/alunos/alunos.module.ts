import { NgModule } from "@angular/core";
import { AlunosComponent } from "./alunos.component";
import { CommonModule } from "@angular/common";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from "./alunos.service";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  exports: [
  ],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers: [
    AlunosService,
    AlunosDeactivateGuard
  ],
})

export class AlunosModule {

}
