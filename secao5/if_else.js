const resultadoFinal = function(nota1, nota2, nota3){
    if ((nota1 + nota2 + nota3 ) >= 180){
        console.log("Aprovado, parabéns geniozinho");
    }else {
        console.log("Ops reprovou, mais um ano");
    }
}

resultadoFinal(52,75,63);

resultadoFinal("epa"); //cuidado com linguagem frcamente tipada
