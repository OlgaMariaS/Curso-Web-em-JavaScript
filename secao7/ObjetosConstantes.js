//Por que consegue alterar os atributos de objeto, sendo que ele foi atribuido a uma const

const pessoa = {nome: 'Olga'}
console.log(pessoa);
pessoa.nome = 'Pedro'; // alterado o dado

console.log(pessoa);

//pessoa é constante, não se pode atribuir outro local na memoria para ele
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa); //congela o objeto, ou seja não pode ser alterado NADA
pessoa.nome = 'Simone';
pessoa.endereco = 'rua abc';
delete pessoa.nome

console.log(pessoa);