import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  public alunos: any[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' }
  ];

  getAlunos() {

    // console.log(this.alunos);
    return this.alunos;

  }
  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      // console.log(i);
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        // console.log(' | ' + id + ' | ' + 'alunos.service')
        // console.log('funcionou')
        return aluno;
      }
      // console.log('falhou')
    }
    // console.log('eita falhou mesmo')

    return null
  }

  constructor() {
  }
}
