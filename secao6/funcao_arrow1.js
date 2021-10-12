//Função normal 
let dobro = function (a){
    return 2 * a;
}

//Funcao arrow, sempre é anonima (sem nome)
dobro2 = (a) => {
    return 2 * a;
} 

//Forma mais reduzida de arrow
dobro3 = a => 2 * a; //return implicito

console.log(dobro(2));
console.log(dobro2(2));
console.log(dobro3(2));