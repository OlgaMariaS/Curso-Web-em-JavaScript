/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

let inteiros = [1,2,4,14,25,78,15,-74,25,41];

let somaMedia = 0;
let qtdeDeElementos = 0;

for(let i = 0;i < inteiros.length; i++ ){
    somaMedia += inteiros[i];
    qtdeDeElementos++
}
let media = somaMedia / qtdeDeElementos;

console.log(media);
