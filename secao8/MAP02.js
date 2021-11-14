const frutas = [
    '{"nome": "banana", "preco": 1.50}',
    '{"nome": "abacaxi", "preco": 3.78}',
    '{"nome": "kiwi", "preco": 9.47}',
    '{"nome": "melancia", "preco": 2.20}'
]

//Retornar array apenas com preços

const objeto = json => JSON.parse(json);
//de texto para objeto e depois puxa somente o preço do objeto
const apenasPreco = produto =>produto.preco;

const preco = frutas.map(objeto).map(apenasPreco);
console.log(preco);
