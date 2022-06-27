/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Samuel'; // Qualquer tipo de strings: '' "" ``
let age: number = 18; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // true ou false
let symbol: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['Samuel', 'Tamires'];
let arrayOfStrings2: string[] = ['Samuel', 'Tamires'];

// Objects
let person: {name: string, age: number, adult?: boolean} = {
  name: 'Samuel',
  age: 18,
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number  = (x, y) => x + y;
