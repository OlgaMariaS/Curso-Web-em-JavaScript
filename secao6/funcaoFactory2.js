//Desafio criar factory que podemos modificar o objeto

function criarProduto(nome,preco, sabor) {
    return {
        nome: nome,
        preco:preco,
        sabor:sabor
    }
}

console.log(criarProduto('Sorvete',3.5,'Sundae de abacaxi ao vinho'));
//sempre que chamar criarProduto, ele instancia objeto

/* 
RESPOSTA DA AULA
function criarProduto(nome,preco, sabor) {
    return {
        nome,
        preco,
        sabor
    }
}
*/