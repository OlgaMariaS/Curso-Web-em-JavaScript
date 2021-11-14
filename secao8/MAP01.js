//MAP = Mapea o array, cria outro array transformando os dados

//Objetivo: transforma os elementos do array no dobro dele
const numeros = [0,1,2,3,4,5];

//MAP, internamento tem um FOR com propósito, novo array é o RESULTADO que percorre o array informado a ele e modifica
let resultado = numeros.map(function(elementoAtual){
    //obrigatorio o retorno
    return elementoAtual * 2;
})

console.log(numeros,"e",resultado);

//arrow
const soma5 = elementoAtual=> elementoAtual + 5;
//transforma valor em reais 
const dinheiro = elementoAtual => `R$ ${parseFloat(elementoAtual).toFixed(2).replace('.' , ',')}`

resultado = numeros.map(soma5).map(dinheiro);

console.log(resultado);