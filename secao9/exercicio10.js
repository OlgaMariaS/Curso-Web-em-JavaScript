/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function sinalMais(quantidadeDeMais){
    const sinalMais = '+';
    const arrayComMais = [];
    for(let i = 0; i < quantidadeDeMais;i++){
        arrayComMais.push(sinalMais);
    }
    console.log(arrayComMais.join());
    //.JOIN -> junta os elementos de array transformando em string
}

sinalMais(5);