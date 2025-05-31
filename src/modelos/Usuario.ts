export class Usuario {
  // Define os atributos privados da classe
  private nome: string;
  private email: string;
  private senha: string;

  // Construtor que inicializa os atributos com os valores recebidos
  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  // Método getter para retornar o nome do usuário
  getNome(): string {
    return this.nome;
  }

  // Método setter para alterar o nome do usuário
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
