let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10; // Tipo literal
let a = 100 as const; // eslint-disable-line
// O tipo de (a) é 100

const person = {
  name: 'Samuel' as const, // O tipo do name é Samuel
  sobrenome: 'Monteiro',
};

function chooseColor(color: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return color;
}
console.log(chooseColor('Vermelho'));

// Module mode
export default 1;
