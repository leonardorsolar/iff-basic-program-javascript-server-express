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

---

Se quiser, posso gerar um PDF com esse tutorial ou criar um repositório de exemplo no GitHub para você usar com os alunos. Deseja isso?
