interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa1 implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoaObj: TipoPessoa2 = {
  nome: 'Samuel',
  sobrenome: 'Monteiro INTERFACE',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

const pessoa1 = new Pessoa1('Samuel', 'Monteiro');
console.log(pessoa1.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
