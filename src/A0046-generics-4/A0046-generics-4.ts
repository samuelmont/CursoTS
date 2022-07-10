// -------------- K é no maximo uma chave de O
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];
// ---------------------Constraint

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
const idade = obterChave(animal, 'idade');

console.log(vacinas, cor, idade);
