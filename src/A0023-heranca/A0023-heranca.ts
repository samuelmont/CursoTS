export class Pessoa {
  constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// Aluno herda tudo de Pessoa
export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do aluno: ${this.nome} ${this.sobrenome}`;
  }
}

// Cliente herda tudo de Pessoa
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Samuel', 'Monteiro', 18, '111.111.111-11');
const aluno = new Aluno('Samuel', 'Monteiro', 18, '111.111.111-11');
const cliente = new Cliente('Samuel', 'Monteiro', 18, '111.111.111-11');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
