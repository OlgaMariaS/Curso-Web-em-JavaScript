/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function dinheiro(valor){

    let notasCem = Math.floor(valor / 100);
    if(notasCem >= 1){
        console.log(`${notasCem} notas de R$ 100`);
    }

    let valorDivirCinquenta = valor - (notasCem * 100);
    let notasCinquenta = Math.floor(valorDivirCinquenta / 50);
    if(notasCinquenta >= 1){
        console.log(`${notasCinquenta} notas de R$ 50`);
    }

    let valorDividirDez = valorDivirCinquenta - (notasCinquenta * 50);
    let notasDez = Math.floor(valorDividirDez / 10);
    if(notasDez >= 1){
        console.log(`${notasDez} notas de R$ 10`);
    }
    
    let valorDividirCinco = valorDividirDez - (notasDez * 10);
    let notasCinco= Math.floor(valorDividirCinco / 5);
    if(notasCinco >= 1){
        console.log(`${notasCinco} notas de R$ 5`);
    }
    
    let valorDividirUm = valorDividirCinco - (notasCinco * 5);
    let notasUm = Math.floor(valorDividirUm / 1);
    if(notasUm >= 1){
        console.log(`${notasUm} notas de R$ 1`);
    }


}

dinheiro(2197);