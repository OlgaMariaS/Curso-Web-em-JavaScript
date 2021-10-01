//Armazenando uma função em uma variavel 

const imprimirSoma = function (a,b) {
    console.log(a+b);
}

imprimirSoma(81,9634);

//Armazenando uma função arrow
const soma = (a, b) => {
    return a + b 
}

console.log(soma(475,635));

//retorno implicito 

const subtracao = (a, b) => a - b; //função

console.log(subtracao(7455, 2651));