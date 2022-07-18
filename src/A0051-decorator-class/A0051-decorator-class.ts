// Decorator te da a opção de "observar ou editar" a classe sem ao menos tocar nela
// Passa a classe como paramêtro
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

// Invocando o decorator na classe
@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('Tamanduá', 'roxo');
console.log(animal);
