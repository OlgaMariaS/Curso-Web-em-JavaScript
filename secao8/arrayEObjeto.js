//array é objeto

const quaseArray = {0:'Simone',1:'Augusto', 2:'Aracelly'}
console.log(quaseArray);

//imprime na tela o obj como se fosse array
Object.defineProperty(quaseArray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})


//acessar objeto como seu fosse array
console.log(quaseArray[0]);
console.log(quaseArray.toString());