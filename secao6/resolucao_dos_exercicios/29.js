/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

let numeros = [2,4,5,10,18,7,20,42,15,12,33,74,17];

for(let i = 0; i <= numeros.length; i++){
    if(numeros[i] >= 10 && numeros[i] <= 20){
        console.log(`${numeros[i]}`);
    }
}