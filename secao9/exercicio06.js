/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ..."*/

function inverso(valor){

    let tipoDeVariavel = typeof(valor);
    
    if(tipoDeVariavel == 'boolean' || tipoDeVariavel == 'number'){
        if(tipoDeVariavel == 'boolean'){
            console.log(!valor);
        } 
        if(tipoDeVariavel == 'number'){
            if(valor >= 0){
                console.log(-valor);
            } else{
                const auxiliarMenosUm = -1;
                console.log(valor * auxiliarMenosUm);
            }
        }
    }else{
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipoDeVariavel}`);
    }
}

inverso(true);
inverso(587);
inverso(-14);
inverso(false);
