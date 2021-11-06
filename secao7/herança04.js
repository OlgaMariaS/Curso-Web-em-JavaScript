function meuObj(){
    console.log(meuObj.prototype);
}

const obj1 = new meuObj;
const obj2 = new meuObj;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(meuObj.prototype === obj1.__proto__);