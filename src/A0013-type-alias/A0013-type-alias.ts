type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  preferredColor?: string;
};
type RGBcolor = 'Vermelho' | 'Verde' | 'Azul'; // Union type (OR)
type CMYKcolor = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'; // Union type (OR)
type PreferredColor = RGBcolor | CMYKcolor;

const person: Person = {
  name: 'Samuel',
  age: 18,
  salary: 20_000, //20000
};

export function setPreferredColor(person: Person, color: PreferredColor): Person {
  return { ...person, preferredColor: color };
}

console.log(setPreferredColor(person, 'Preto')); // Não foi mudado no objeto original
console.log(person);
