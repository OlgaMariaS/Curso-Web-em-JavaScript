//Variaveis locais e globais 
{
    {
        var dentro = "dentro";
    }
}

console.log(dentro);

function visivel () {
    var visivel2 = "estou aqui";
}

//console.log(visivel2); não consegue acessar var

var numero = 1;
{
    var numero = 5;
    console.log("dentro do bloco = ", numero);
}

console.log("fora do bloco = ", numero);