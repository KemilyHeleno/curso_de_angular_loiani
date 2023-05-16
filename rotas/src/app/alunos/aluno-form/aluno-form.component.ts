import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { __param } from 'tslib';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {

  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();

  }
  onInpt() {
    this.formMudou = true;
    console.log('mudou')
  }

  podeMudarRota() {

    console.log('pode ter mudado');

    if (this.formMudou == false) {
      confirm('Tem certeza que deseja sair dessa página?');
      console.log('quer sair?');
    }

    console.log('alguem não desiste');
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
