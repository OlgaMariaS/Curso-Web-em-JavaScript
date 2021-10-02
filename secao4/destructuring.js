//Desestruturar 
const pessoa = {
    nome: "Olga",
    idade: 19,
    endereco: {
        rua: "Olavo Bilac,",
        numero: 148
    }
}

//pegar nome e idade do objeto

const {nome, idade} = pessoa;
console.log(nome, idade);

//atribuir o valores do objeto a variaveis

const {nome: identificacao, idade: anos} = pessoa;
console.log(identificacao, anos);

//acessando dentro de dois objetos

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);