import { Component, NgModule, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {
  public alunos: any[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    // console.log(this.alunos);

    this.alunos = this.alunosService.getAlunos();

    // console.log(this.alunos);

  }
}
