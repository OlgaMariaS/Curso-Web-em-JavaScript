console.log(typeof Object);

class teste {}
console.log(typeof teste);

/*
função recebe dados e faz os passos dentro dela, é um bloco de código 
recebe parametros, pode ou não retornar algo

Exemplos básicos de funções
*/

function imprimirSoma (a, b) {
    console.log(a+b)
}

imprimirSoma(1846,2651);

function soma (a, b = 0) {//função com retorno
    return a + b
}

console.log(soma(5, 10));