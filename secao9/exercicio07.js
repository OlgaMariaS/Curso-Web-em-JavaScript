/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.*/

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
    }

 function entre(numero, minimo, maximo, inclusivo = false){
    if(inclusivo = true && numero >= minimo && numero <= maximo){
        console.log(inclusivo);
    }else{
        console.log(inclusivo);
    }
 }

entre(0,-1,10,true);
entre(0,1,10,false);