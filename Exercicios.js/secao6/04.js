/*4) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function divisao (dividendo, divisor){
    let divisaoDosParametros = Math.floor(dividendo/divisor);
    return console.log(`Divisão de ${dividendo} : ${divisor} = ${divisaoDosParametros} e seu resto é: ${dividendo%divisor} `);
}

divisao(10,2);
divisao(15,2);