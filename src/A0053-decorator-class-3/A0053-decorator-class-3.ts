function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorator e recebi: ', target);
    return class extends target {
      nome: string;
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return `${valor.split('').reverse().join('')} ${param1} ${param2}`;
      }
    };
  };
}

@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('SOU A CLASSE');
  }
}

const animal = new Animal('Tamanduá', 'roxo');
console.log(animal);
