/**28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let inteiros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log("Pares");
for(let i = 0; i <= inteiros.length;i++){
    if(i % 2 == 0){
        console.log(`${i}`);
    }
}

console.log("Impares");
for(let i = 0; i <= inteiros.length;i++){
    if(i % 2 != 0){
        console.log(`${i}`);
    }
}