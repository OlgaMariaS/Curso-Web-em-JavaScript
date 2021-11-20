/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:*/

function criaNovoArray(array){
    let arrayNovo = [];
    for (var key in array) {
        if( key == 0 || (key == (array.length - 1) )){
        arrayNovo.push(array[key]);
        }    
    }
    console.log(arrayNovo);
}

criaNovoArray([1,2,3,4]);