function getNumeroInteiro (min, max){
    const inteiro = Math.random() * (max - min) + min;
    return Math.floor(inteiro)
}

let opcao;

do { //executa a primeira opção OBRIGATORIAMENTE e depois o while
    opcao = getNumeroInteiro(-1, 10)
    console.log(`Opção foi ${opcao}`) //lembrar de colocar ``
} while ( opcao != -1) { 
    opcao = getNumeroInteiro(-1, 10)
    console.log(`Opção foi ${opcao}`)
}

console.log("Ficamos por aqui");


