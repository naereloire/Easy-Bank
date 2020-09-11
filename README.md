# Mirart - Desafio Hub Fintech


- [1. Introdução](#1-introdução)
- [2. Conheça nossa Aplicação](#2-Conheça-nossa-aplicação)
- [3. Protótipo](#3-protótipo)
- [4. Implementações Futuras Checklist](#4-implementações-futuras-checklist)
- [5. Instalação do projeto](#5-instalação-do-projeto)


## 1. Introdução
Este projeto foi desenvolvido por [Francieli Abreu](https://github.com/francielisabreu),[Karina Vitangelo](https://github.com/karinavit), [Luana Arêdes Costa](https://github.com/luana-aredes) e [Naere Loire](https://github.com/naereloire) alunas da 4a Geração da [Laboratoria](https://github.com/Laboratoria) (SAP004), para o [Talent Fest](https://talentfest.laboratoria.la).

### Desafio
Nosso desafio foi proposto pela empresa [Hub Fintech](https://www.hubfintech.com.br/), com o tema livre, nos foi proposto desenvolver uma aplicação Web ou Apps de conta digital utilizando alguns dos serviços providos por API pela Hub Fintech.

### Solução
Desenvolvemos nossa solução visando trazer educação financeira e inclusão digital por meio de serviços bancários a mulheres artesãs da região nordeste do Brasil.

### Planejamento
Com base na Metodologia Ágil, foi criado um quadro no [Trello](https://trello.com/), onde definimos e dividimos as tarefas utilizando Kanban, dessa forma assim conseguíamos acompanhar, revisar e ajustar de forma rápida.

## 2. Conheça nossa Aplicação
Acesse nossa aplicação neste [link](https://hubapp-7c145.web.app/)

![git_talent](https://user-images.githubusercontent.com/61189470/92955950-710b4300-f43c-11ea-9691-2ded683a9db6.gif)

**Login de Teste:**
e-mail: nina@nina.com 
senha: 123456


## 3. Protótipo
Desenvolvemos um protótipo de baixa fidelidade no [Figma](https://www.figma.com/)

### Logo
![2logo-mirart](https://user-images.githubusercontent.com/61189470/92866835-5a320580-f3d6-11ea-8d02-cde043c54c88.png)

### Tela de Login e Cadastro
![3tela-login-registro](https://user-images.githubusercontent.com/61189470/92866838-5aca9c00-f3d6-11ea-8084-ca60b34a7f32.jpeg)

### Tela de Home
![4tela-home](https://user-images.githubusercontent.com/61189470/92866840-5b633280-f3d6-11ea-8840-a56e8dfa2f6f.png)


A aplicação foi desenvolvida utilizando [React](https://pt-br.reactjs.org/), [JavaScript, HTML5 e CSS3](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript). Hospedamos a mesma juntamente com seu de dados no [Firebase](https://firebase.google.com/?hl=pt). Com foco na usabilidade em tablets e web. 

## 4. Implementações Futuras Checklist
Pensando em melhorias para o nossa aplicação, abaixo listamos as atividades para implementação futura:

- [ ] 
- [ ] 
- [ ] 


## 5. Instalação do projeto

Caso deseje baixar o projeto para sua máquina é possível criar um fork do nosso repositório e depois disso, você deve realizar um "clone" ou "donwload" do **link fornecido pelo seu repositório** para então digitar em seu terminal:

  `git clone <cole seu link após isso>`
  
O repositório será completamente baixado em sua máquina, e caso use o Visual Studio Code, basta entrar na pasta pelo terminal e digitar:

  `code .`

Caso não possua o Node.js instalado, basta clicar nesse link [aqui](https://nodejs.org/pt-br/download/) e fazer o download, pois, para executar ele em seu computador, será necessário realizar a instalação da pasta node modules, com o uso do NPM (nativo do Node.js).

Assim que a instalação tiver sido concluída, basta digitar em seu terminal:

`npm install` 

E aguardar até que o processo tenha sido completo.

É importante ressaltar que também utilizamos o [React](https://pt-br.reactjs.org/) e o [React-Router-Dom](https://reactrouter.com/web/guides/quick-start). 

### Antes de instalar o Firebase, certifique-se de criar uma conta e abrir um projeto novo ( visto que você não terá acesso ao nosso banco de dados):

Lembre-se de instalar o Firebase, utilizando o comando (este comando irá instalar o Firebase globalmente em sua máquina):

`npm install -g firebase-tools`

Faça login no Google. Execute este comando: (Esse comando conecta sua máquina local ao Firebase e concede acesso aos seus projetos.)

`firebase login`

Inicialize seu projeto utilizando o comando:

  `firebase init`

Para abrir um servidor a fim de executar o projeto em seu navegador, é só digitar:
  
  `firebase serve`

Basta clicar no link (localhost) que será disponibilizado em seu terminal. 

Após manipular o projeto e então realizar um deploy, utilize o seguinte comando:

`firebase deploy`
