# iff-basic-program-javascript-server-express

Abaixo está um **tutorial passo a passo**, detalhado e didático, ideal para alunos iniciantes em programação. O objetivo é **clonar um projeto Node.js com TypeScript e Express**, instalar as dependências e executar a aplicação localmente.

---

## 🧑‍💻 Tutorial: Como executar seu primeiro projeto com Node.js + TypeScript + Express

### 📦 1. Pré-requisitos

Antes de começar, verifique se o computador do aluno tem:

- **Node.js** instalado (versão 18+ recomendada) → [https://nodejs.org/](https://nodejs.org/)
- **Git** instalado → [https://git-scm.com/](https://git-scm.com/)

---

### ⬇️ 2. Clonar o projeto do GitHub

Abra o terminal (ou o Git Bash) e digite o comando abaixo para copiar o projeto do GitHub para o seu computador:

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
```

📁 Isso criará uma pasta com o código do projeto.

---

### 📁 3. Acessar a pasta do projeto

Depois que o projeto for clonado, entre na pasta com:

```bash
cd nome-do-projeto
```

---

### 📦 4. Instalar as dependências do projeto

O Node.js usa bibliotecas externas para funcionar corretamente. Para instalá-las, digite:

```bash
npm install
```

Esse comando vai ler o arquivo `package.json` e instalar todas as bibliotecas necessárias (como `express`, `nodemon`, `typescript`, etc).

---

### 🚀 5. Executar o projeto

Para iniciar o servidor com recarregamento automático (modo de desenvolvimento com **nodemon**), digite:

```bash
npm run start
```

Você verá uma mensagem como:

```
Servidor rodando na porta 3000
```

---

### 🌐 6. Ver a aplicação no navegador

Abra seu navegador e digite o endereço:

```
http://localhost:3000/
```

Você verá a mensagem:

```
Olá, Mundo! Bem-vindo ao Express com TypeScript.
```

Para ver a rota de usuário:

```
http://localhost:3000/usuario
```

Você verá um objeto JSON com as informações simuladas do usuário:

```json
{
  "nome": "leonardo",
  "email": "leo@gmail.com",
  "senha": "123456"
}
```

### 🌐 7. Ver a aplicação no frontend com os dados do usuário

Acesse a pasta front/frontend.html

Dê um duplo clique no arquivo frontend.html

Obs.: Certifique-se de que o backend está rodando com: npm run start

Você verá o nome, e-mail e senha do usuário renderizados.

dica: use um servidor local como Live Server no VSCode

---

## 🧠 Entendendo o código

Vamos entender cada parte do projeto:

### 📄 `index.ts` – Arquivo principal

```ts
import express, { Request, Response } from 'express'; // Importa o framework Express
import cors from 'cors'; // Permite que a aplicação aceite requisições de outros domínios
import { Usuario } from './modelos/Usuario'; // Importa a classe Usuario

const app = express(); // Cria a aplicação Express

// Rota principal que responde com uma mensagem simples
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, Mundo! Bem-vindo ao Express com TypeScript.');
});

// Rota que retorna um usuário simulado
app.get('/usuario', (req: Request, res: Response) => {
  const name = 'leonardo';
  const email = 'leo@gmail.com';
  const senha = '123456';

  // Cria um novo objeto do tipo Usuario
  const usuario = new Usuario(name, email, senha);

  // Retorna os dados como resposta
  res.send(usuario);
});

// Define a porta onde a aplicação vai rodar
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

---

### 📄 `modelos/Usuario.ts` – Classe do usuário

```ts
export class Usuario {
  private nome: string;
  private email: string;
  private senha: string;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  getNome(): string {
    return this.nome;
  }
  setNome(nome: string): void {
    this.nome = nome;
  }

  getEmail(): string {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }

  getSenha(): string {
    return this.senha;
  }
  setSenha(senha: string): void {
    this.senha = senha;
  }
}
```

Essa classe representa um **modelo de dados** de um usuário. Ela ajuda a organizar e manipular informações como nome, email e senha.

---

## 🧰 Entendendo o `package.json`

Esse é um resumo dos scripts disponíveis:

```json
"scripts": {
  "start": "nodemon",           // Usa nodemon para rodar automaticamente o projeto com recarregamento
  "build": "tsc",               // Compila o TypeScript para JavaScript
  "start:prod": "node dist/index.js", // Roda a versão final compilada
  "test": "jest"                // Roda os testes (não utilizado por enquanto)
}
```

---

## 💡 Dicas Finais

- Sempre use `npm install` quando baixar um projeto novo.
- Use `npm run start` durante o desenvolvimento (usando **nodemon**, o servidor reinicia automaticamente).
- Se quiser compilar o TypeScript manualmente, use: `npm run build`.
- Para produção (quando o projeto já está pronto): `npm run start:prod`.

# Teste unitário com Jest

---

## ✅ O que é o Jest?

> O **Jest** é uma ferramenta de testes automatizados para aplicações JavaScript e TypeScript. Ele verifica se o seu código está funcionando como deveria, **de forma automática**.

---

## 📁 Estrutura de testes

Geralmente, os testes ficam dentro da **pasta `tests/`**. Cada arquivo de teste termina com `.test.ts` ou `.spec.ts`.

Exemplo:

```
/tests
  └── Usuario.test.ts
```

---

## 🔍 Código de exemplo: `tests/Usuario.test.ts`

```ts
import { Usuario } from '../src/modelos/Usuario'; // Importa a classe que será testada

// Define um grupo de testes chamado "Classe usuario"
describe('Classe usuario', () => {
  // Teste: verifica se o objeto usuario é criado corretamente
  test('Deve criar um usuario com nome, email e senha', () => {
    // Given (Dado): os dados para criar um usuário
    const usuario = new Usuario('leonardo', 'leonardo@gmail.com', 'senha123');

    // When (Quando): acessamos o nome do usuário criado
    const nome = usuario.getNome();

    // Then (Então): esperamos que o nome seja "leonardo"
    expect(nome).toBe('leonardo');
  });
});
```

> 🎓 Esse teste **verifica se a classe `Usuario` está funcionando corretamente.**

---

## ▶️ Como rodar os testes?

Use este comando no terminal:

```bash
npm run test
```

Você verá uma saída parecida com:

```
 PASS  tests/Usuario.test.ts
  Classe usuario
    ✓ Deve criar um usuario com nome, email e senha

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

Isso significa que o teste passou com sucesso ✅

---

## 📊 Como ver o coverage (cobertura de testes)?

**Cobertura de testes** mostra **quais partes do seu código foram testadas**.

### 1. Adicione este script ao seu `package.json`, se ainda não existir:

```json
"scripts": {
  "test": "jest",
  "test:cov": "jest --coverage"
}
```

### 2. Execute:

```bash
npm run test:cov
```

### 3. Saída esperada (exemplo):

```
-------------------|---------|----------|---------|---------|
File               | % Stmts | % Branch | % Funcs | % Lines |
-------------------|---------|----------|---------|---------|
All files          |     100 |      100 |     100 |     100 |
 modelos           |     100 |      100 |     100 |     100 |
  Usuario.ts       |     100 |      100 |     100 |     100 |
-------------------|---------|----------|---------|---------|
```

Ele mostra **quantos por cento do seu código está sendo testado**.

Além disso, uma pasta chamada `coverage/` será criada com **relatórios detalhados**, inclusive em HTML!

Para visualizar no navegador:

```bash
npx open coverage/lcov-report/index.html
```

Ou abra manualmente esse arquivo.

---

## Alternativa para rodar o jest no terminal.

Use este comando no terminal:

```bash
npx jest --coverage
```

## 🧠 Dicas para iniciantes

- Um teste é dividido em 3 partes:

  - **Given (Dado):** prepara o cenário
  - **When (Quando):** executa a ação
  - **Then (Então):** verifica se o resultado está certo

- Use `expect()` para fazer as verificações
- Testes ajudam a ter **confiança** no código
- O Jest é uma ferramenta muito usada em **projetos profissionais**

---

## 📚 Resumo dos comandos úteis

| Comando            | O que faz                                 |
| ------------------ | ----------------------------------------- |
| `npm run test`     | Executa todos os testes                   |
| `npm run test:cov` | Executa os testes e mostra a cobertura    |
| `npx jest`         | Outra forma de rodar os testes            |
| `npx jest --watch` | Roda testes automaticamente quando salvar |

---

Claro! Vamos entender de forma simples e direta como funciona um **servidor com Express** e como o **frontend se comunica com ele**:

---

### 🧠 O que é um servidor?

Um **servidor** é um programa que **fica escutando pedidos (requisições)**. Quando ele recebe um pedido, **responde com algo** — por exemplo, um texto, uma imagem ou dados.

---

### 🧠 Como funciona um servidor HTTP?

![Texto alternativo](./image/cliente-servidor-http.png)

O **protocolo HTTP** é um importante protocolo utilizado na internet para realizar comunicação entre dois programas. É um protocolo cliente-servidor, ou seja, cada ator da comunicação realiza um papel diferente..

O cliente pode ser entendido como a parte que inicia ativamente a comunicação. Já o servidor é a parte passiva que aguarda por conexões vindas dos clientes.

No caso do HTTP, a comunicação ocorre através de pares de mensagens chamadas de request e response. O cliente é o responsável por fazer solicitações (request), enquanto o servidor responde (response) cada solicitação realizada pelo cliente.

Ao montar uma requisição, o cliente deve indicar explicitamente o endereço do recurso que deseja interagir. Esse endereçamento é feito através de uma URL, detalhada a seguir.

### URL

A URL (Uniform Resource Locator) é um padrão estabelecido que permite indicar o endereço de algum recurso no servidor. A URL possui o seguinte formato:

http://localhost:3000/usuarios

- http://:protocolo
- localhost: host
- :3000:
- porta
- /usuarios: caminho

A primeira parte da URL é conhecida como scheme e indica o protocolo a ser utilizado. Em seguida, é indicado o endereço do host (servidor). Após o host, é colocada a porta da comunicação indicada após o sinal de dois-pontos (:). Depois, tem-se o path, que indica o caminho para o recurso.

### 🧱 O que é o Express?

O **Express** é uma **ferramenta do Node.js** que facilita a criação de servidores. Ele permite que você defina **rotas**, que são os caminhos pelos quais o navegador (ou outro sistema) pode fazer **requisições**.

---

### 🔄 Como funciona a comunicação frontend ↔ servidor?

![Texto alternativo](./image/cliente-servidor.png)

1. **Frontend (HTML/JS)** faz um pedido HTTP (ex: `fetch`, `axios`, formulário).

   - pedido -> request

2. O servidor Express **recebe esse pedido**.

   - -> métodos (get/post/put/delete) -> request

3. O servidor **processa** (pode buscar dados, calcular, etc).

   - rota -> métodos (get/post/put/delete) -> request -> Classe -> response

4. O servidor **envia uma resposta**.

   - <- response

5. O frontend **recebe essa resposta** e pode **mostrar os dados na tela**.

   - <- response

---

### 💡 Exemplo real (como no seu projeto):

#### 🖥️ Frontend:

```javascript
fetch('http://localhost:3000/usuario');
```

Esse comando pede os dados do usuário para o servidor.

#### 🛠️ Backend (Express):

```ts
app.get('/usuario', (req, res) => {
  const usuario = new Usuario('leonardo', 'leo@gmail.com', '123456');
  res.send(usuario); // resposta enviada ao frontend
});
```

Essa rota `/usuario` **recebe o pedido** e **responde com os dados** do usuário.

#### 📦 O que chega no frontend:

```json
{
  "nome": "leonardo",
  "email": "leo@gmail.com",
  "senha": "123456"
}
```

Esses dados são usados no HTML para mostrar o usuário na tela.

---

### 📌 Resumo:

- O frontend **faz um pedido** para o servidor (via rota).
- O servidor **responde** com dados.
- O frontend **usa os dados** para exibir algo para o usuário.

---

Claro! Aqui vai uma explicação **simples e didática** para quem está começando:

---

## 🖥️ Métodos HTTP

Um **servidor** é como um "garçom digital". Ele **recebe pedidos** (chamados de _requisições_) e **responde com informações** (chamadas de _respostas_).

👉 Exemplo real:

- Você digita `https://meusite.com/usuario` no navegador.
- O navegador envia um **pedido GET** para o servidor.
- O servidor responde com os dados do usuário.

---

## 🔄 Como o navegador (frontend) conversa com o servidor (backend)?

- O navegador faz uma **requisição HTTP**.
- O servidor (com Express, por exemplo) **recebe essa requisição**, processa e **envia uma resposta**.
- Essa resposta pode ser:

  - Um texto
  - Um JSON (dados)
  - Uma imagem
  - Um HTML
  - Um erro, se algo deu errado

---

## 📬 Métodos HTTP (os "tipos de pedidos")

![Texto alternativo](./image/metodos.png)

### 1. **GET** – Pedir informações

- Como: “Ei servidor, me envie os dados!”
- Exemplo: buscar lista de usuários

```ts
app.get('/usuarios', (req, res) => {
  res.send(['João', 'Maria']);
});
```

### 2. **POST** – Enviar dados

- Como: “Servidor, aqui estão os dados para você salvar.”
- Exemplo: enviar nome, email e senha para cadastrar um usuário

```ts
app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  // salvar no banco...
  res.send('Usuário criado!');
});
```

### 3. **PUT** – Atualizar dados existentes

- Como: “Atualize esse dado com as novas informações.”
- Exemplo: editar os dados do usuário com ID 1

### 4. **DELETE** – Apagar dados

- Como: “Remova esse dado.”
- Exemplo: deletar o usuário com ID 5

---

## 💡 Resumo visual

| Método | Para que serve  | Exemplo prático        |
| ------ | --------------- | ---------------------- |
| GET    | Buscar dados    | Ver lista de produtos  |
| POST   | Enviar dados    | Cadastrar novo usuário |
| PUT    | Atualizar dados | Editar uma tarefa      |
| DELETE | Remover dados   | Apagar um comentário   |

---

Se quiser, posso te mostrar um exemplo com todos esses métodos no Express para praticar!

# 📘 Mini Tutorial – Comandos Básicos do Git

## 1️⃣ Clonar um repositório remoto

### 🔹 Comando:

```bash
git clone https://github.com/usuario/nome-do-repositorio.git
```

### 🧠 O que faz?

Copia todos os arquivos e histórico de versões de um projeto remoto (como no GitHub) para o seu computador.

---

## 2️⃣ Verificar o status do repositório

### 🔹 Comando:

```bash
git status
```

### 🧠 O que faz?

Mostra:

- Quais arquivos foram modificados
- Quais arquivos estão prontos para o commit
- Quais ainda precisam ser adicionados

---

## 3️⃣ Adicionar arquivos para o commit

### 🔹 Comando:

```bash
git add .
```

### 🧠 O que faz?

Adiciona **todos os arquivos modificados** para a "área de preparo" (_staging area_) – ou seja, prontos para serem salvos no Git.

> 💡 Você também pode usar `git add nome-do-arquivo.ext` para adicionar apenas um arquivo específico.

---

## 4️⃣ Fazer o commit das alterações

### 🔹 Comando:

```bash
git commit -m "Mensagem explicando o que foi alterado"
```

### 🧠 O que faz?

Cria um **registro permanente** das alterações no histórico do projeto com uma mensagem descritiva.

> Exemplo: `git commit -m "Corrigido erro na rota de login"`

---

## 5️⃣ Enviar alterações para o repositório remoto

### 🔹 Comando:

```bash
git push
```

### 🧠 O que faz?

Envia os commits que estão no seu computador para o repositório remoto no GitHub (ou outro serviço).

```bash
git push  origin main
```

Obs.: terá que digitar nome do usuário e depois a senha do github

---

## ✅ Resumo dos comandos

```bash
git clone <url-do-repositorio>
git status
git add .
git commit -m "mensagem do commit"
git push
```

---
