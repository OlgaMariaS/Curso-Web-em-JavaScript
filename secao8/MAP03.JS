//Veremos como o MAP se comporta 
Array.prototype.map2 = function(callback){
    const newArray = [];
    for(i = 0; i< this.length;i++){
        newArray.push(callback(this[i]));
    }
    return newArray
}

const frutas = [
    '{"nome": "banana", "preco": 1.50}',
    '{"nome": "abacaxi", "preco": 3.78}',
    '{"nome": "kiwi", "preco": 9.47}',
    '{"nome": "melancia", "preco": 2.20}'
]

const objeto = json => JSON.parse(json);
const apenasPreco = produto =>produto.preco;

const preco = frutas.map2(objeto).map2(apenasPreco);
console.log(preco);