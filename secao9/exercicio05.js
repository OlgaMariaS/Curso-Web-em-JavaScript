/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

function numerosIgualOuDiferentes (numero1, numero2){
    if(numero1 >= numero2){
        console.log(`Numero ${numero1} é igual ou é maior que ${numero2}`);
    }else{
        console.log('Numeros diferentes');
    }
}

numerosIgualOuDiferentes(1,1);
numerosIgualOuDiferentes(10,52);
numerosIgualOuDiferentes(7,4);