import express, { Request, Response } from 'express';
import cors from 'cors'; // Importa o CORS
import { Usuario } from './modelos/Usuario';

const app = express();
app.use(express.json());

// Configura o CORS
app.use(cors()); // Aplica o CORS para permitir requisições de outros domínios

// Rota GET para visualização
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, Mundo! Bem-vindo ao Express com TypeScript.');
});

app.get('/usuario', (req: Request, res: Response) => {
  const name = 'leonardo';
  const email = 'leo@gmail.com';
  const senha = '123456';

  const usuario = new Usuario(name, email, senha);

  res.send(usuario);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
