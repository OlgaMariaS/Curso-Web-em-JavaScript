//OBJ: Coleção dinâmica de pares chave/valor

const produto = new Object;
produto.nome = 'Olga';
produto['Sobrenome'] = 'Maria'
produto.idade = 19;

console.log(produto);

delete produto.idade;
console.log(produto);

const carro = {
    modelo: 'BMW',
    valor: 200.000,
    propritario: {
        nome: 'Olga',
        CNH: 123456,
        endereço: {
            Rua: 'Emilio de Menezes',
            CEP: 86807330
        }
    }
}