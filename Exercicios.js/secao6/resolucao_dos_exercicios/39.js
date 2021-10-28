/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

var vetorA = [1,2,3,4];
var vetorB = [5,6,7,8];

function trocaElementos(vetor1, vetor2){
    let vetorAtual1 = vetor1.splice(Number.MAX_VALUE,0);
    let vetorAtual2 = vetor2.splice(Number.MAX_VALUE,0);


    vetorAtual1.push(vetor2);
    vetorAtual2.push(vetor1);

    console.log(vetorAtual1);
    console.log(vetorAtual2);
}

trocaElementos(vetorA, vetorB);

