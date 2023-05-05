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
