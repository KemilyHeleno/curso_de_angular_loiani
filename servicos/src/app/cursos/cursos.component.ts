import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  cursosService: CursosService;

  constructor() { // Primeiro método a ser executado por ser o construtor da classe
    this.cursosService = new CursosService();
  }

  ngOnInit() { // Primeiro método executado assim que a classe é inicializada (depois do construtor)
    this.cursos = this.cursosService.getCursos();
  }
}
