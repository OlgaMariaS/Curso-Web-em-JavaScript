//FUNÇÃO ANONIMAS = FUNÇÕES SEM NOME

const cartesiano = function (x, y) {
    return x + y;
}

const imprimirResultado = function (a, b, operacao = cartesiano) {
    console.log(operacao(a, b));
}

imprimirResultado(1,2);

imprimirResultado(2,2, function(x, y) {
    return x -y;
}) //função anonimas foi passado como paramtro para soma

imprimirResultado (4,4, (x,y) => x*y) //função arrow como parametro
