//Objetivo da herança é o reuso do código, lembrando que a composição é melhor indicada

/*Prototipo ([[Prototype]]), seria quase como escopo abrangente, 
se houver uma propriedade sem valor no obj, 
ele vai buscar no obj pai, avo, bisavo até encontrar se não será indefinido 
[[Prototype]] é conceito e é diferente de prototype
*/
//metodo de acessar o prototype é:  __proto__
const ferrari ={
    modelo:'f40',
    velMax: 324
}
const volvo ={
    modelo:'v40',
    velMax: 200
}

//Object.prototype local onde todos os obj irão apontar de inicio, podem ser mudados
console.log(ferrari.__proto__);

console.log(ferrari.__proto__ === Object.prototype);

console.log(volvo.__proto__ === Object.prototype);

function MeuObjeto(){
    console.log(typeof Object, typeof MeuObjeto);
    console.log(Object.prototype, MeuObjeto.prototype)
}
MeuObjeto();

