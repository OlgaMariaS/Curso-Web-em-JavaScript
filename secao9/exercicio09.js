/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetir(aSerRepetido, quantasRepeticoes){
    let arrayResultado = [];
    
    for(let i = 0; i < quantasRepeticoes; i++){
        arrayResultado.push(aSerRepetido);
    }

    console.log(arrayResultado);
}

repetir(2,5);