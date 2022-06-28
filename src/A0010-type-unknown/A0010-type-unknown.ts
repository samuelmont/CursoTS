// unknown é tipo o any, só que ele irá mandar você checar ele antes de fazer qualquer ação
let x: unknown;
x = 100;
x = 'Samuel';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y); // checkagem
