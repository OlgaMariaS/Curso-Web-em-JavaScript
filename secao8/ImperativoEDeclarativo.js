const alunos = [
    {nome:'João',nota: 7.9},
    {nome:'Maria', nota: 9.4}
]

//media das notas dos alunos

//Imperativo, tem menos reuso 
let total1 = 0;
for(let i = 0; i < alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

//Declarativa
const getNota = alunos => alunos.nota; //puxa nota
const soma = (total, atual) => total + atual; //função que auxilia reduce

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2/alunos.length)

//Diferença, no imperativo o COMO é feito é mais importante no declarativo diz o que precisa fazer e é feito