// Quando usarmos get e set é aconselhavel que a declaração original tenha um underscore ( _ )antes do nome
export class Pessoa {
  constructor(private nome: string, private sobrenome: string, private idade: number, private _cpf: string) {
    this.cpf = _cpf;
  }

  //Setter
  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  //Getter
  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Samuel', 'Monteiro', 18, '111.111.111-11');
pessoa.cpf = '123.456.789-00'; //Chamando o setter do cpf
console.log(pessoa.cpf); // Chamando o getter do cpf
