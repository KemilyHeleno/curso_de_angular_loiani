import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];
    //     // console.log(id + ' aluno-detalhe')
    //     this.aluno = this.alunosService.getAluno(id);
    //     // console.log(id + ' aluno-detalhe2 ')


    //   }
    // )

    this.inscricao = this.route.data.subscribe(
      (info: Data = {aluno: Aluno}) => {
        console.log(info);
        this.aluno = info['aluno'];
      }
    );
  }

  editarContato() {
    this.router.navigate([this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


}
