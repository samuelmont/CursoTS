// Classe com um tipo
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Samuel', 'Monteiro');
console.log(pessoa.nomeCompleto());

// Classe com multiplos tipos
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export class Pessoa1 implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Pessoa1('Samuel', 'Monteiro');
console.log(pessoa1.nomeCompleto());
