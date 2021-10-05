Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const resultado = function (valor){
    if (Notification.entre(9,10)){
        console.log("");
    }else if (nota.entre(7,3)) {
        console.log("Aprovado")
    } else  {
        console.log("Valores inválidos");
    }
}

resultado(5);