@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('SOU A CLASSE');
  }
}

// Args é o conteudo que foi passado para a classe e target é a classe que o decorator está estendendo
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorator e recebi: ', target);
  // Momento que ele extende a classe que irá ser usada
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

const animal = new Animal('Tamanduá', 'roxo');
console.log(animal);
