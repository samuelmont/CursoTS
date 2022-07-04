// Método estático pode ser usado sem instanciar a classe
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // Método acessando propriedades estáticas, ambos na mesma classe
  }

  // Método estatico
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, this.idadePadrao, this.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Samuel', 'Monteiro', 18, '111.111.111-11');
const pessoa2 = Pessoa.criaPessoa('Edmilson', 'Monteiro'); // Usando o método estático
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal(); // Chamando método
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // Chamando propriedades estaticas
