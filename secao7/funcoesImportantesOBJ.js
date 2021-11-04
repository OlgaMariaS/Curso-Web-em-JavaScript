const pessoa = {
    nome: 'Olga',
    idade: 19,
    peso: 54
}

console.log(Object.keys(pessoa));//puxa as chaves de dentro
console.log(Object.values(pessoa)); //puxa os valores 
console.log(Object.entries(pessoa)); //array com as chaves e seus respectivos valores

//percorrendo o array        // e => siginifica percorrer a si proprio
Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

/* Mesma coisa que o acima, mas neste esta definindo melhor e separando a chave do valor
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
}) */

//defini propriedade do obj
Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true, //se pode ser enumerada
    writable:false, //se pode ser alterado
    value: "14/09/2002" //valor da data de nascimento, propriedade criada anteriormente neste mesma função
})

pessoa.dataNascimento = '14/09/1994'; //vai puxar o primeiro valor atribuido dentro da função
console.log(pessoa.dataNascimento);

//Object.assing (ECMAScript 2015)
const dest = {a:1}
const b = {b:2}
const c = {c:3, a:4}

const obj = Object.assign(dest,b, c);
//todos os obj recebidos pelos obj dest,b,c irão ao obj

console.log(obj);