//por mais que a função não tenha sido declarada com parametros ela pode receber

function soma(){
    let soma = 0;
    for (i in arguments){
        soma +=arguments[i];
    }
    return console.log(soma);
}

/*arguments é um array, esta sendo 'varrido' com isso esta pegando os elementos
que foram passados como paramtros da função*/

soma(10);
soma(1,2,3,4,5);
soma('O', 'L', 'G', 'A');