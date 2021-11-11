//string, array e object são funções

String.prototype.reverse = function(){
    //adiciona atributos e metodos dentro da string
    //TODA FUNÇÃO POSSUI UM ATRIBUTO PROTOTYPE
    return this.split("").reverse('').join('')
    //      QUEBRA O ARRAY/ reverter (inverter) / junto tudo
}

console.log("Escola Cod3r".reverse());

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4].first());

//sobrescrever funções
String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('bagagem'.reverse());