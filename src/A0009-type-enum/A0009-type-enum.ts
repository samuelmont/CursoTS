enum Colors {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Colors {
  ROXO = 'ROXO', // ROXO
  VERDE = 201, // 201
  ROSA, // 202
}

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.ROXO);
chooseColor(12425346); // Retornará undefined pois (12425346) não existe
// console.log(Colors);
// console.log(Colors.VERMELHO);
// console.log(Colors[10]);
// console.log(Colors.ROXO);
