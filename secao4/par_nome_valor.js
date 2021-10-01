const saudacao = "olá"; 

function executar () {
    const saudacao = "Fala ai"
    return saudacao;
}

//contexto léxico: a função procurará a variavel saudação
//mas se não encontrar dentro dela vai para a proxima que tem o mesmo nome 
console.log(saudacao)