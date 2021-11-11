function meuObj(){
    console.log(meuObj.prototype);
}

const obj1 = new meuObj;
const obj2 = new meuObj;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(meuObj.prototype === obj1.__proto__);

meuObj.prototype.nome = 'Anonimo';
meuObj.prototype.falar = function(){
    console.log(`Bom dia! me chamo ${this.nome}`);

}

obj1.falar();
obj2.nome = 'Olga';
obj2.falar();