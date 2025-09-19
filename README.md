# Teste para Desenvolvedor Júnior - Conéctar

Este projeto consiste em uma aplicação web simples cujo objetivo é demonstrar minhas habilidades com React.JS, juntamente com o consumo da API do IBGE para a exibição dos dados em gráficos e tabelas, e consiste em duas telas principais:

* Tela 1 - Gráfico de evolução do PIB
Nesta tela, é exibida a evolução do PIB brasileiro (em dólares) e a evolução do PIB per capita brasileiro (em dólares) ao longo dos anos.

* Tela 2 - Tabela de PIB por ano
Nesta tela, é exibida uma tabela com o ano, o PIB total (em dólares) e o PIB per capita (em dólares).

## Instruções de instalação e execução do projeto

Para instalar e executar localmente o projeto, é necessário instalar anteriormente o [Node.JS](https://nodejs.org/) para utilizar o módulo de instalação das dependências do projeto.

### Instalação

1. Clonagem do repositório
  - Caso tenha o Git instalado em sua máquina, utilize o comando `git clone https://github.com/Davuei/teste_conectar.git` no terminal para clonar o repositório no diretório atual.
  - Caso não tenha o Git instalado, baixe o diretório na página do repositório para ter acesso aos arquivos.

2. Instalação das dependências
  - No diretório do repositório, instale as dependências, presenetes no arquivo "package.json", com o comando `npm install`, ou `yarn install` se preferir.

### Execução

1. Comando para executar localmente após instalação
  - Para executar o projeto localmente da maneira mais rápida, utilize o comando `npm run dev` e abra o localhost exibido no terminal quando a aplicação estiver em execução. O localhost utilizando é o [localhost:5173](http://localhost:5173).

## Explicação sobre decisões de design e tecnologias utilizadas
### Design

* Paleta de cores e fontes de texto
As cores e fontes de texto utilizadas na aplicação foram baseadas na paleta de cores e nas fontes da página principal do site oficial da Conéctar, que pode ser encontrado [aqui](https://www.conectarapp.com.br/).

* Layout da aplicação
Para o design da aplicação, foi utilizada uma abordagem simples e minimalista, dado o prazo para o desenvolvimento da aplicação.

### Tecnologias utilizadas

Agora para uma parte mais técnica, as tecnologias utilizadas no desenvolvimento da aplicação foram:

* Vite
O [Vite]{https://vite.dev/} é uma ferramenta que facilita o início e o desenvolvimento de aplicações com React.JS, entregando uma estrutura pronta para começar o projeto e ferramentas para a execução da aplicação.

* React.JS
O [React.JS](https://react.dev/) foi a biblioteca principal para o desenvolvimento de toda a aplicação, juntamente com TypeScript para a linguagem a fim de manter a segurança da tipagem do sistema.

* CSS Modules
Opção mais segura para a estilização de componentes do React.JS, uma vez que sua funcionalidade de Single Page Application pode fazer com que arquivos CSS de outros componentes causem resultados indesejados (aplicar estilizações em toda a página).
O uso de CSS puro foi utilizado apenas em arquivos de estilização cujo objetivo era estilizar a página como um topo.

* React Router Dom
A biblioteca [react-router-dom](https://www.npmjs.com/package/react-router-dom) foi utilizada para configurar a navegação da aplicação, como as rotas possíveis, lidar com rotas que não existem e alterar o título da página.

* Chart.JS
O [Chart.JS](https://www.npmjs.com/package/chart.js), juntamente com a biblioteca [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2), formam uma opção simples, fácil de utilizar e robusta para a exibição de dados em gráficos.