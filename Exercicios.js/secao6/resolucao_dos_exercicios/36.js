/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

let vetor = [1,2,3,4,5];

function multiplicacao(vetorInicial, multiplicador){
    let vetorFinal = [];

    vetorInicial.forEach(element => {
        vetorFinal.push(element * multiplicador);
    });

    return console.log(vetorFinal);
}


function multiplicacaoMaiorQueCinco(vetorInicial, multiplicador){
    if(multiplicador >= 5){
    let vetorFinal = [];

    vetorInicial.forEach(element => {
        vetorFinal.push(element * multiplicador);
    });

    return console.log(vetorFinal);
    } else {
    console.log("Multiplicador menor que 5");
    }
}
multiplicacao(vetor,2);
multiplicacaoMaiorQueCinco(vetor,8);