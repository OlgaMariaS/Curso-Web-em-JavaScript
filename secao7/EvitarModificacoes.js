//JS é uma linguagem dinamica e flexivel
//METODOS DE RESTRINGIR ALTERAÇÕES NO CÓDIGO

//Object.preventExtensios = não deixa aumentar atributos, só excluir ou editar os dados dos atributos
const produto = Object.preventExtensions({
    nome: 'banana',
    preco: 1.50,
    tag:'promoção'
})

console.log("Promoção de hoje é: ", Object.isExtensible(produto));

produto.nome = 'Borracha'; 
delete produto.tag;

console.log(produto);

//Object.seal = selar, consegue somente modificar valores 
const pessoa = {nome:'Paula', idade:46}
Object.seal(pessoa);

delete pessoa.nome; //não altera nada
pessoa.altura = 1.72;

console.log('Selado? ', Object.isSealed(pessoa));

//Object.freeze = não consegue alterar nada