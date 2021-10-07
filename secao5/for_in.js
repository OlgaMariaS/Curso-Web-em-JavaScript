//For e IN
//dito que não é a melhor opção para percorrer o array

    //indices   0 1 2 3 4
const numero = [1,2,3,4,5];

// for in busca os valores pelo indice deles 
for(let i in numero){
    console.log(i, numero[i]);
}

const serHumanoOlga = {
    nome: "Olga",
    idade: 19
}
for (let atributo in serHumanoOlga) {
    console.log(`${atributo} = ${serHumanoOlga[atributo]}`);
}