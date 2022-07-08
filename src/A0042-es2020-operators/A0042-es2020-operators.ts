// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

//------------------ Encadeiamento Opcional
//------------------------|
console.log(documento.data?.toDateString() ?? '1-Ixi, não existe data.');
//-----------------------------------------||
//----------------------------- Sinal de Coalecencia nula
// Basicamente: "Se o primeiro valor for null ou undefined, faça isso aqui"

console.log(undefined ?? '2-Ixi, não existe data.');
console.log(null ?? '3-Ixi, não existe data.');

console.log(false ?? '4-Ixi, não existe data.');
console.log(0 ?? '5-Ixi, não existe data.');
console.log('' ?? '6-Ixi, não existe data.');
// Podemos perceber que valores false e falsey (0, "", NaN e etc) não caem para a segunda opção, apenas null e undefined
