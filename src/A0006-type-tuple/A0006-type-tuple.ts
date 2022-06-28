// Tuple
const clientData1: [number, string] = [1, 'Samuel'];
const clientData2: readonly [number, string, string] = [1, 'João', 'Souza']; // Tupla imultavel
const clientData3: [number, string, string?] = [1, 'João']; // tupla que aceita number, string e talvez outra string
const clientData4: [number, string, ...string[]] = [1, 'João', 'String', 'StringAgain']; // tupla que aceita number, string e infinitas strings

clientData1[0] = 100;
clientData1[1] = 'Maria';
clientData1.pop(); // Sem readonly podemos excluir (.pop) ou adicionar (.push) em uma tupla

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// readonly Array
const array1: readonly string[] = ['Samuel', 'Monteiro'];
const array2: ReadonlyArray<string> = ['Samuel', 'Monteiro'];

console.log(array1);
console.log(array2);
