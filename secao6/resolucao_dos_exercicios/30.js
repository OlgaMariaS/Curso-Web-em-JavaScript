/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

let inteiros = [14,85,74,3,82,74,632,41,7,92,1,02,7,2,9,15,7];

let maiorValor = 0;

for(let i = 0; i < inteiros.length;i++){
    if(inteiros[i] > maiorValor){
        maiorValor = inteiros[i];
    }
   
}
let menorValor = maiorValor;
for(let i = 0; i < inteiros.length;i++){
    if(inteiros[i] < menorValor){
        menorValor = inteiros[i];
    }
   
}


console.log(`Maior numero é: ${maiorValor}`);
console.log(`Menor numero é: ${menorValor}`);