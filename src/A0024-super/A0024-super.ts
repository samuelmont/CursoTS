// Super Classe
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

// Sub classe
// Aluno herda tudo de Pessoa
export class Aluno extends Pessoa {
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    // nome, sobrenome, idade e cpf estão sendo só recebidas na constructor, ja sala está sendo declarada
    super(nome, sobrenome, idade, cpf); // relacinando nome, sobrenome, idade e cpf a constructor da super
  }
  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    return super.getNomeCompleto(); // chamando o methodo getNomeCompleto Da classe super (PAI)
  }
}
// Sub classe
// Cliente herda tudo de Pessoa
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Samuel', 'Monteiro', 18, '111.111.111-11');
const aluno = new Aluno('Samuel', 'Monteiro', 18, '111.111.111-11', '0001');
const cliente = new Cliente('Samuel', 'Monteiro', 18, '111.111.111-11');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
