/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console*/

let inteiro = [-5,-4,-3,-2,-1,0,1,2,3,4,5,6];

let numeroDeNegativos = 0;

for(let i = 0; i < inteiro.length; i++){
    if(inteiro[i] < 0){
        numeroDeNegativos++
    }
}
console.log(numeroDeNegativos);