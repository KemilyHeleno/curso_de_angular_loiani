# Curso de Angular com a Loiane Groaner
Curso de Angular na plataforma  
https://loiane.training/continuar-curso/angular  
https://github.com/loiane/curso-angular2  
https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G  

# Módulo 1 do Curso - **Introdução**
## Aula 1

* Introdução
* Componentes e Templates
* Data binding
* Diretivas
* Serviços
* Formulários
* Roteamento
* Integração com Servidor
* CRUD Mestre-Detalhe - Trabalho com tudo que foi realizado no curso

### Requisitos para o curso
* Conhecimento em HTML, CSS e JavaScript
* NÃO precisa saber AngularJS 1.x

### Angular
* https://angular.io
* Parceria Google + Microsoft
* Open Source (código no GitHub) - https://github.com/Angular
* Uso de padrões web e Web Components

### Blocos principais
* Componentes
* Diretivas
* Roteamento
* Serviços
* Template
* Metadata
* Data Binding
* Injeção Dependência

#### Componente
É aquilo que o usuário irá ver, como formulários por exemplo  
Encapsula:  
* Template
* Metadata: processamento das classes
* Dado a ser mostrado na tela (Data Binding)
* Comportamento da VIEW

Tudo que tem na aplicação, é um componente, tem a raiz e seus ramos:  
Tela Principal - Cabeçalho (Barra de Navegação) - Barra Lateral - Posts  
São exemplos de componentes diferentes, com funções diferentes que estão na mesma página  
O componente é capaz de fazer integração com o backend, não importando a linguagem que foi utilizada no back, mas é importante utilizar um Service para não afetar o componente de forma negativa.  

## Aula 2

Instalação do NodeJs - https://nodejs.org  
Utilizaremos o pacote NPM - https://www.npmjs.com/  
Documentação do TypeScript - https://www.typescriptlang.org/  
  
O angular foi escrito em TypeScript por isso essa a liguagem que será utilizada durante o desenvolvimento, mas quando a aplicação vai para a web o 
TypeScript é transcrito para JavaScript.  

### Melhores Editores de Texto
* Visual Studio Code (Vs Code) - Suporta TypeScript - gratuito
* Atom - Precisa de um pluggin para o TypeScript - https://atom.io/packages/atom-typescript - pago
* WebStorm - Suporta TypeScript - gratuito
* Sublime Text - Precisa de um pluggin para o TypeScript - https://github.com/microsoft/typescript-sublime-plugin - pago


# Módulo 2 do Curso - **Data Binding**

## Aula 9 - Property Biding (Binding de propriedades) + Interpolação

No angular existem 4 formas de fazer o data binding  

### O que é o Data Binding?
Uma forma de associar informações que estão no componente para o template e vice-versa

* Interpolação ou Interpolation - pega o valor de um atributo ou um método e nos permite ter essa saída no template

* Binding de propriedade - faz associação de propriedade, onde também podemos ver a saída de um componente no template

* Handler - Efeito contrário, onde nós podemos executar uma lógica no componente, através de uma ação que foi realizada no template

* two and data binding - onde podemos manter tanto o componente quanto o template atualizados ao mesmo tempo, isso é bem útil quando se trata de formulários

### Property Binding
* Valor do Component para o Template
* Usa-se colchetes `<img [src]="urlImg"/>`
* Formato padrão é através de `bind-nomePropriedade <img bind-src="urlImg"/>`
* Quando não existe propriedade no elemento, usa-se `[`**`attr`**`.colspan]`

## Aula 12 - Two-way Data Binding

* Valor do Template para o Componente e vice-versa
* Usa-se binding de eventos + propriedades
* Sintaxe "Banana na caixa - [()] - usada pelo método Two-Way Data Binding

## Aula 14 - Emitindo Eventos com Output Properties

### Criando Componentes Reutilizáveis
* Componente Customizado:
Objetivo: Disarar um evento "mudou" toda vez que o usuário clilcar nos botões + ou -.  
Evento recebe novo valor do input.  
