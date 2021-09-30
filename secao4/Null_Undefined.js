//Transferencia de valores por locais na memoria
const a = {name: "Olga"}
console.log(a);

const b = a; //armazena o endereço da memoria que a tem tbm

b.name = "maria"
console.log(b);
console.log(a);

//Transferencia de valores por copia
let c = 5;

let d = c;
d++
console.log(d);
console.log(c);

//Undefined
let indefinido; //não inicializada
console.log(indefinido);

let vazia = null; //ausencia de valor
console.log(vazia);