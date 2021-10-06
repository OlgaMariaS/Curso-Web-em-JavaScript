//Multiplos seleções

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const resultado = function (nota){
    switch (Math.floor(nota)) {
        case 10: //quando esta em branco vai executar o que estiver no case abaixo
        case 9: console.log("É o próprio Albert Eistein");
                break;
        case 8:
        case 7: console.log("Uau, seria você o magamente?");
                break;
        case 6:
        case 5: console.log("Ta saindo da jaula o monstro");
                break;
        case 4: case 3: case 2: case 1:
            console.log("Bora estudar");
                break;
        default: //se nenhum caso é valido, este executa
            console.log("Nota invalida");
    } 
}
// sem o break - quebrar ele vai executar todos os casos, sem validos ou não

resultado(7);