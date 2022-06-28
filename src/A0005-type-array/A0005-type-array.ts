// Array<T> - T[]
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(2, 2, 3);
const concat = concatStrings('Samuel', 'Monteiro');
const upper = toUpperCase('a', 'b', 'c', 'd');

console.log(result);
console.log(concat);
console.log(upper);
