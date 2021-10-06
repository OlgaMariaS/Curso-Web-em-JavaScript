Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const resultado = function (valor){
    if (valor.entre(6,10)){
        console.log("Acertou na mosca");
    }else if (valor.entre(1,3)) {
        console.log("Aprovado")
    } else  {
        console.log("Valores inválidos");
    }
}

resultado(6);