//Diferença de função com e sem callback

//Extrair do array apenas os numeros abaixo de 5

const naturais = [1,2,3,4,5,6,7,8,9,10];

//Sem callback
let menorQueCinco = []
for (let i in naturais) {
    if (naturais[i] <= 5){
        menorQueCinco.push(naturais[i]);
    }
}
console.log(menorQueCinco);
//Com callbak

let maiorQueCinco = [];
maiorQueCinco = naturais.filter(function (numero){
    return numero > 5;
}); 
//filter(filtrado) altera menorQueCinco

//a função dirá quem é menor que 5 no array naturais, e o filtre empurra estes ao array menoQueCinco

console.log(maiorQueCinco);