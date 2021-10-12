const carrosLuxuosos =  ["Mercedes", 'BMW', "Audi", 'ferrari'];
//criado array 

function imprimir (nome,indice) {
    console.log(`${indice + 1}. ${nome}`);
}

//função imprimi na tela; o indice é mais um pois array começa em 0

//CallBack: passa função apara outra e quando ocorre algo a função é chamada

//Metodos:
carrosLuxuosos.forEach(imprimir);
carrosLuxuosos.forEach(function (a){
    console.log(a);
})
carrosLuxuosos.forEach(carrosLuxuosos => console.log(carrosLuxuosos));

//Percorre o array e a cada novo elemento que ele encontra mostra o indice e o elemento