// Setando valores padrão de um generic em uma interface (type alias é do mesmo jeito)
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

// Trocando o valor da generic da interface
const aluno: PessoaProtocolo<string, number> = {
  nome: 'Samuel',
  sobrenome: 'Monteiro',
  idade: 18,
};

// Trocando o valor da generic da interface
const aluno1: PessoaProtocolo<boolean, number> = {
  nome: true,
  sobrenome: false,
  idade: 0,
};

// Usando o valor padrão da generic da interface
const aluno2: PessoaProtocolo = {
  nome: 'João',
  sobrenome: 'Luiz',
  idade: 65,
};

console.log(aluno, aluno1, aluno2);
