//SE, SE NÃO, ENTÃO

function mediaEscolar (nota){
    if (nota >= 7){
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }
}
mediaEscolar(8);

function seForVerdadeEuFalo (valor){
    if (valor){
        console.log("É verdade meus amigos, estou estudando programação");
    }
}

seForVerdadeEuFalo(true);

//Executando if e else de forma abreviada

function abreviada (numero){
    if (numero > 5)
        console.log("Esta linha pertence ao if");
        //indicado a não utilizar
        console.log("Esta linha pertence ao else");
}

abreviada(7);
