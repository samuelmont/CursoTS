type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca']; // "Clonando" o tipo de um para o outro
  year: Veiculo['ano']; // "Clonando" o tipo de um para o outro
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Mustang',
};

console.log(carro);
