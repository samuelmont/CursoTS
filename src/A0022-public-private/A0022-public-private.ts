// Public pode ser acessado de qaulquer lugar tanto dentro e fora de seu escopo ( Quando ti não define o tipo automaticamente vira public )
// Private só pode ser acessado dentro de teu escopo ou classe onde ele foi criado ( Perfeito para encapsulamento do POO )
export class Empresa {
  readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

  apagaColaboradores(): void {
    this.colaboradores.pop();
  }
}

// Com esse atalho é necessário o public, private e etc
export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Maria', 'Aparecida');
const colaborador2 = new Colaborador('Edmilson', 'Monteiro');
const colaborador3 = new Colaborador('Tamires', 'Nathalia');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
