//Dois tipos de chamar função

function getPreco (imposto=0, moeda="R$"){
    return `${moeda} ${this.preco * (1 -this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: "Notebook",
    preco: 5000,
    desc: 0.10,
    getPreco
}

//maneira de chamar a função
globalThis.preco = 10;
global.desc = 0.10;
console.log(getPreco());
console.log(produto.getPreco());

//maneira CALL de chamar a função 
const carro = {preco:10000, desc: 0.25}
console.log(getPreco.call(carro));

//maneira APPLY de chamar a função 
const moto = {preco:50000, desc: 0.50}
console.log(getPreco.apply(moto));
