// Public pode ser acessado de qaulquer lugar tanto dentro e fora de seu escopo ( Quando ti não define o tipo automaticamente vira public )
// Private só pode ser acessado dentro de tua classe onde ele foi criado ( Perfeito para encapsulamento do POO )
// Protected pode ser acessado dentro de tua classe ou em sub classes ( Perfeito para encapsulamento do POO )
export class Empresa {
  readonly nome: string; // public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop(); // this. colaboradores é do tipo private e é de uma super classe
    if (colaborador) return colaborador;
    return null;
  }
}

// Com esse atalho é necessário o public, private e etc
export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Maria', 'Aparecida');
const colaborador2 = new Colaborador('Edmilson', 'Monteiro');
const colaborador3 = new Colaborador('Tamires', 'Nathalia');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
