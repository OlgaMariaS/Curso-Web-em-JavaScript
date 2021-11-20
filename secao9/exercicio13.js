/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function somenteNumeros(array){
    arraySomenteComNumeros = [];
    array.forEach(function(elemento){
        if(typeof elemento == 'number'){
            arraySomenteComNumeros.push(elemento);
        }
    });
    console.log(arraySomenteComNumeros);
}

arrayTeste = ['h', true, '92', 4, '4%2', 7, 'olga'];

somenteNumeros(arrayTeste);