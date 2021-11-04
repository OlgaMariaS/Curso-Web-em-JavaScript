//Getters e Setters são metodos de encapsulamento

const sequencia ={
    _valor: 1, // convenção de programação, com o _ significa que é privado
    get valor() {return this._valor++},
    set valor(valor) {this._valor = valor}

}

console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 400;
console.log(sequencia.valor, sequencia.valor);