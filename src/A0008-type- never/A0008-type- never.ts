// Tipo (never) nunca retorna nada
function createError(): never {
  throw new Error('Erro qualquer');
}

createError();
