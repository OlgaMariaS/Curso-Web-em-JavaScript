/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplicar(numero1, numero2){
    if(numero1 >= 0 && numero2 >= 0 ){
        let resultado = 0;
        for(let i = 0; i < numero2;i++){
            resultado += numero1;
        }
        console.log(`Multiplicação sem usar sinal entre os numeros é: ${resultado}`);
    }else{
        console.log('Numero negativo não pode');
    }
}

multiplicar(5,2);