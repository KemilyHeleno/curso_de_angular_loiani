import { Component } from '@angular/core';

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

  addCurso(valor: any){
    console.log('Eu estou aqui: ' + valor)

    this.livros.push(valor);

  }
}

