//par nome/valor

const saudacao = "olá"; 

function executar () {
    const saudacao = "Fala ai"
    return saudacao;
}

//contexto léxico: local de memoria onde foi definido 

//a função procurará a variavel saudação
//mas se não encontrar dentro dela vai para a proxima que tem o mesmo nome 
console.log(saudacao);

//Objetos são grupos de pares e valores
const cliente = {
    nome: "Olga",
    idade: 9,
    edereco: {
        rua: "Olavo Bilac",
        numero: 148,
        cep: 86807330,
        bairro: "jardim américa"
    }
}

console.log(cliente);