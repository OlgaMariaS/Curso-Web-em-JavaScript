/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor */

function impares(valorInicial,valorFinal){
    if(valorInicial >= 0 && valorFinal <=100){
        if(valorInicial <= valorFinal){
            var comecoDaContagem = valorInicial;
            var finalContagem = valorFinal;
        }else{
            var comecoDaContagem = valorFinal;
            var finalContagem = valorInicial;
        }
        for(let i = comecoDaContagem; i <= finalContagem;i++){
            if(i % 2 != 0){
                console.log(i);
            }
        }
    }
}

impares(0,100);