import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'É assim que acaba',
    rating: 4.8,
    numeroPaginas: 368,
    preco: 37.90,
    dataLancamento: new Date(2018, 1, 18),
    url: 'https://a.co/d/28niSeC'
  };

  livros: string[] = ['É assim que acaba', 'É assim que começa'];
  filtro: any;

  addCurso(valor: any) {
    console.log('Eu estou aqui: ' + valor)

    this.livros.push(valor);
    console.log(this.livros);
  }

  //Jeito certe de se fazer um filtro com pipe ♥
  obterCursos() {
    if (this.filtro && this.filtro.trim() !== '') {
      if (this.livros.length === 0 || this.filtro === null || this.filtro.trim() === '') {
        return this.livros;
      }

      return this.livros.filter((v: any) => {
        if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
          return true;
        }
        return false
      });
    }
    return this.livros;


  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2: any = interval(2000)
    .pipe(map((valor: any) => 'Valor Assíncrono 2'));
}
