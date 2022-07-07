// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Samuel',
  sobrenome: 'Monteiro',
  enderecos: ['Av, Brasil'],
  idade: 18,
};

console.log(pessoa);
