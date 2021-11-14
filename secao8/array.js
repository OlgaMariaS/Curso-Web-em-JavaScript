//Array em JS é um objeto

console.log(typeof new Array, typeof []);

//Sugerido que array seja HOMOGENEO, seja de mesmo tipo, array somente com number, string, objeto...

let aprovados = new Array('Olga', 'Bruna', 'Aracelly');
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[9] = 'José';
aprovados.push('Baiano')//metodo mais comum 

console.log(aprovados[9]);
console.log(aprovados[10]);
console.log(aprovados.length); //11 indices do 4 ao 8 são indefinidos mas existem o local na memoria

aprovados.sort() //ordena array, colocando elementos sem nada no fim
console.log(aprovados);

delete aprovados[1]; //deixa indice 1 indefinido
console.log(aprovados);

aprovados.splice(1,2, 'ElementoAdicionadoPorSplice') //função splice: adiciona e remove elementos
console.log(aprovados);
