const pai = {nome:"Pai", corCabelo: "preto"}

const filhaOlga = Object.create(pai);//define o prototype em pai
filhaOlga.nome = 'Olga';
console.log(filhaOlga.corCabelo);                   

const filhoOsvaldo = Object.create(pai,{
    nome: {value: 'Osvaldo',writable:false, enumerable:true}
} );

console.log(filhoOsvaldo.nome);
filhoOsvaldo.nome = "Eduardo";
console.log(`${filhoOsvaldo.nome} tem cor de cabelo ${filhoOsvaldo.corCabelo}`)

console.log(Object.keys(filhaOlga));
console.log(Object.keys(filhoOsvaldo));

for(let key in filhoOsvaldo){
    filhoOsvaldo.hasOwnProperty(key)? //hasOwnproperty ve se pertence a propriedade ao obj
    console.log(key) : console.log(`Por herança: ${key}`);
}