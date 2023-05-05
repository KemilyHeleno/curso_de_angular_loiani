# Curso de Angular com a Loiane Groaner
Curso de Angular na plataforma  
https://loiane.training/continuar-curso/angular  
https://github.com/loiane/curso-angular2  
https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G  

# Módulo 1 - Introdução
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


# Módulo 2 - Data Binding

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

## Aula 15 - Ciclo de Vida do Componente
### Life Cycle Hooks
* 1 - `ngOnChanges` - Antes #2 e quando valor `property-binding` é atualizado
* 2 - `ngOnInit` - Quando Component é inicializado
* 3 - `ngDoCheck` - A cada ciclo de verificação de mudanças
* 4 - `ngAfterContentInit` - Depois de inserir conteúdo externo na view
* 5 - `ngAfterContentChecked` - A cada verificação de conteúdo inserido
* 6 - `ngAfterViewChecked` - A cada verificação de conteúdo / conteúdo filho
* 7 - `ngOnDestroy` - Antes da diretiva / Componente ser destruído

# Módulo 3 - Angular CLI

## Aula 17 - Angular CLI: Instalação e criação de projetos ng, new, ng init e ng serve

Para fazer a instalação do Angular CLI `npm install -g angular-cli`  
**Note** Para que o funcinamento do CLI seja efetivo é importante que a máquina esteja com o Node atualizado no mínimo para a versão 4  

**Note** Documentação do Angular CLI - https://github.com/angular/angular-cli  

## Aula 18 - Criando componentes services e pipe
`cd NomeProjeto` 
`ng generate component meu-primeiro`
`ng g component meu-primeiro`

### Criando arquivos - Angular CLI
* Component - `ng g component meu-component`
* Service - `ng g service meu-servico`
* Directive - `ng g directive minha-diretiva`
* Pipe - `ng g pipe meu-pipe`
* Class - `ng g class minha-classe`
* Interface - `ng g interface minha-interface`
* Enum (Enumeradores) - `ng g enum meu-enum`

## Aula 19 - Angular CLI: Usando Sass, Less ou Stylus

### Escolhendo o Pré-Processador do CLI
Ao gerar um novo Projeto: 
* `ng new meu-projeto --style=sass`
* `ng new meu-projeto --style=less`
* `ng new meu-projeto --style=stylus`

Em um projeto existente: 
* `ng config defaults.styleExt scss`
* `ng config defaults.styleExt less`
* `ng config defaults.styleExt styl`

> **Warning** - Quando eu uso o comando: ng set defaults.styleExt scss. Está sendo apresentado no terminal, o erro: "Error: Unknown command. Did you mean test?". Como posso corrigir isso?

> **Note** - Esse erro pode ocorrer se você estiver executando o comando `ng set defaults.styleExt scss` em uma versão desatualizada do Angular CLI.  
> O comando `ng set` foi removido na versão 12 do Angular CLI e substituído pelo comando `ng config`. Portanto, se você estiver usando uma versão mais recente do Angular CLI, tente usar o seguinte comando em vez disso:  
> ```
> ng config defaults.styleExt scss
> ```
> Isso deve definir a extensão padrão dos arquivos de estilo para SCSS na sua aplicação Angular.  
> Se você ainda estiver usando uma versão mais antiga do Angular CLI e o comando `ng set` não estiver funcionando, tente atualizar para a versão mais recente do Angular CLI usando o seguinte comando:  
> ```
> npm install -g @angular/cli@latest  
> ```
> Isso deve atualizar o Angular CLI para a versão mais recente e permitir que você use o comando `ng set` sem erros.  

> **Warning** - Quando uso o comando: `ng config defaults.styleExt scss`, apresenta o erro: "`Error: Schema validation failed with the following errors:`  
> `Data path "" must NOT have additional properties(defaults).`" no terminal  
> Como posso resolver?  

> **Note** - Esse erro pode ocorrer se a versão do Angular CLI que você está usando não suportar a opção `defaults.styleExt` na configuração.  
> Para resolver esse problema, você pode tentar atualizar para a versão mais recente do Angular CLI executando o seguinte comando:  
> ```
> npm install -g @angular/cli@latest  
> ```
> Isso deve instalar a versão mais recente do Angular CLI e permitir que você use o comando `ng config defaults.styleExt scss` sem erros.  
> Se a atualização não resolver o problema, verifique se você está executando o comando `ng config` na raiz do projeto Angular e se o arquivo `angular.json` está presente nessa pasta.  
> Outra opção é editar manualmente o arquivo `angular.json` e adicionar a configuração `styleExt` para definir a extensão padrão dos arquivos de estilo. Para fazer isso, abra o arquivo `angular.json` e localize a seção `"schematics": { "component": { ... } }`. Adicione a propriedade `"styleExt": "scss"` dentro dessa seção, conforme mostrado abaixo:  
> ```
> "schematics": {
>   "component": {
>     "styleext": "scss"
>   }
> }
> ```
> Salve o arquivo e reinicie o servidor de desenvolvimento do Angular se ele estiver em execução. Com essa configuração, o comando `ng generate component` criará novos componentes com arquivos de estilo SCSS por padrão.  

## Aula 20 - Angular CLI: ng lint, ng teste, ng e2e

* lint - escanea o código na buscar de pequenos erros que seriam dificilmente encontrados pelo programador

## Aula 21 - Angular CLI: Estrutura do Projeto

### Para que serve o Angular CLI?
* Cria toda a estrutura do Projeto
* Gera página HTML inicial, arquivos TypeScript iniciais, arquivos CSS e arquivos de testes unitários
* Cria arquivo package.json com todas as dependências do Angular 2
* Instala todas as dependências do node (`npm install`)
* Configura o Karma para executar os testes unitários com Jasmine
* Configura o Protactor para executar os testes end-to-end (e2e)
* Inicializa um repositório git no projeto e faz o commit inicial
* Cria todos os arquivos necessários para fazer o build da aplicação para produção

### Estrutura de Diretórios do Projeto
* **config** - diretório que contém configuração para deploy/buil e teste
* **dist** - diretório onde é gerado o build da aplicação. Ignorado pelo git
* **e2e** - diretório que contém os scripts para testes end-to-end
* **node_modules** - diretorio que conteém os pacotes npm da app (package.json). Também ignorado pelo git
* **public** - diretório genérico que contém um arquivo .npmignore
* **src** - diretório do código fonte da aplicação. Contém código typescript/javascript, CSS, imagens e templates HTML
* **angular-cli.json** - arquivo que contém informações sobre o projeto e build de produção, como nome do projeto, config de onde encontrar os arquivos fontes da app, config de testes, etc...
* **tslint.json** - arquivo que contém configurações para fazer lint da app

### Estrutura package.json
**Dependencies X DevDependencies**
* **Dependencies**: Dependências necessárias para executar a aplicação.
* **DevDependencies**: Dependências necessárias para desenvolver a aplicação (não necessárias após o build de produção).

#### Estrutura package.json: Dependencies
* **@angular/core** - pacote principal do framework Angular 2. Contém decorators e metadados, Component, Directive, injeção de dependência e os hooks de ciclo de vida do Component.
* **@angular/compiler** - Serviços, pipes e diretivas comuns fornecidas pelo time de dev do Angular.
* **@angular/compiler** - Template de compilação do angular. Entende o código dos templates e converte em código que faz a app ser executada e renderizada. Desenvolvedores não interagem com esse pacoite diretamente (apenas usamos seu código)
* **@angular/forms** - Contém todo o código para construção de formulários no angular 2
* **@angularplataform-browser** - Contém todo o código relacionado ao DOM e ao browser, especialmente as partes que ajudam a renderizar o DOM. Esse pacote também contém o método para fazer o bootstrap da aplicação para builds de produção que pré-compila os templates
* **@angular/plataform-browser-dynamic** - Contém os Providers e o método para iniciar as aplicações que compilam templates no lado di cliente. Não usa compilação offline. Usada para fazer bootstrap durante desenvolvimento e exemplos plunker.
* **@angular/http** - Fornece o cliente HTTP
* **@angular/router** - Classes de Roteamento

#### Estrutura package.json: Dependencies: Polyfills
* **core-js** - Biblioteca que permite compatibilidade de engines JS antigas com a especificação do ES 2015, ou seja, emula as funcionalidades do ES 2015 (ES6) e ES7 em browsers que suportam somente ES5.
* **reflect-metadata** - Dependência compartilhada entre o Angular e o compilador TypeScript. Permite o uso de decorators no código (annotations). Isso permite ao desenvolvedores fazer upgrade no TypeScript sem precisar de fazer upgrade no Angular. esse é o motivo desta ser uma dependência da aplicação e não do Angular.
* **rxjs** - Extensão para a especificação dos Observables (programação assíncrona). Reactive extensions for JavaScript.
* **ts-helpers** - Biblioteca auxiliar que permite otimização de código typescript quando o mesmo é compilado para ES5.
* **zone.js** - Extensão (plugins) útil para tarefas assíncronas (chamadas de Zones).
* **@types/jasmine**: Definição Jasmine para typescript (antigo typings)
* **@types/protractor**: Definição protractor para typescript (antigo typings)
* **angular-cli**: Ferramenta de linha de comando para gerencia projetos angular 2
* **codelyzer**: lint (análise de código) para angular 2
* **jasmine-core**: Arquivos principais jasmines para node.js
* **jasmine-spec-reporter**: Relatório em tempo real para BDD com Jasmine
* **karma**: Ferramenta de testes que cria um web server e executa código de teste em cada um dos browsers conectados
* **karma-chrome-launcher**: launcher do karma para o chrome
* **karma-jasmine**: Adaptador para o Jasmine
* **karma-remap-instabul**: Adaptador para code coverage (relatório)
* **prostractor**: Framework de teste end to end (integração) para angular
* **ts-node**: Módulo typescript para node.js
* **ts-lint**: Lint (análise de código) para typescript
* **typescript**: Compilador TypeScript

A documentação é a sua melhor amiga!  
Desenvolva o hábito de ler os docs!  
> https://angular.io/docs  

