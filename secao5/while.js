//While é mais indicada quantidade identerminada de vezes mas determinada é possivel
//While: enquanto algo ocorrer faça isto;

function getNumeroInteiro (min, max){
    const inteiro = Math.random() * (max - min) + min;
    return Math.floor(inteiro);
}

let opcao = 0;

while (opcao != -1){
    opcao = getNumeroInteiro(-1, 10);
    console.log(`Opção foi ${opcao}`); 
}
console.log("Ficamos por aqui");

//erro com ${opcao} estava aparecendo escrito e não o numero gerado
//resolvido, erro de sintaxe deveriam ser ``