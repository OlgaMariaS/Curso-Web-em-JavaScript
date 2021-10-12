//Função Factory = retorna um objeto, factory = FABRICA


//Imagina ter 100 produto na sorveteria, teria de escrever 100 objetos
const produto = {
    nome: 'Sorvete',
    preco: 5,
    sabor: 'banana splich'
} // instancia de objeto

//factory simples
function criarProduto() {
    return {
        nome:'Sorvete',
        preco:5,
        sabor: 'banana splich'
    }
}

console.log(criarProduto());
//sempre que chamar criarProduto, ele instancia objeto
