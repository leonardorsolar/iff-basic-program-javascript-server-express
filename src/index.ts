import express, { Request, Response } from 'express';
import cors from 'cors'; // Importa o CORS
import { Usuario } from './modelos/Usuario';

// Cria uma instância do aplicativo Express
const app = express();

// Configura e aplica o middleware CORS na aplicação
// Isso permite que o backend aceite requisições vindas de outros domínios (como um frontend separado)
app.use(cors());

// Define uma rota GET na raiz do servidor
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, Mundo! Bem-vindo ao Express com TypeScript.');
});

// Define uma rota GET para "/usuario"
app.get('/usuario', (req: Request, res: Response) => {
  // Cria dados simulados de um usuário
  const name = 'leonardo';
  const email = 'leo@gmail.com';
  const senha = '123456';

  // Instancia um objeto da classe Usuario com os dados acima
  const usuario = new Usuario(name, email, senha);
  // Retorna o objeto do usuário como resposta
  res.send(usuario);
});
// Define a porta onde o servidor irá escutar as requisições
const PORT = 3000;
// Inicia o servidor e exibe uma mensagem no console
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
