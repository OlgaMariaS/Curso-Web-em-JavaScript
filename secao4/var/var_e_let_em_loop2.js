//Com var é:
const array1 = []; //array

for (var i = 0; i < 10; i++){
    array1.push(function() {
                console.log(i);
    })
}

array1[5](); //mostra o valor final, pois o valor da var foi subtituido

//Com let fica: 
const array2 = []; //array

for (let a = 0; a < 10; a++){
    array2.push(function() {
                console.log(a);
    })
}

array2[5](); //mostra o valor que a variavel let estava em determinado periodo, pois ele guarda a consciencia
array2[8]();