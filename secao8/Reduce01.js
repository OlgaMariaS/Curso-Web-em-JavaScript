//é contido um valor que é adicionado ao 1º valor do array e o resultado será depois atibuido a 2º elemento do array até o fim 
const alunos = [
    {nome:'Joana', nota: 7.3, bolsista:true},
    {nome:'Joane', nota: 6.7, bolsista:false},
    {nome:'Joani', nota: 8.1, bolsista:true},
    {nome:'Joano', nota: 9.4, bolsista:false},
    {nome:'Joanu', nota: 5.4, bolsista:false}
]

const resultado = alunos.map(alunos => alunos.nota).reduce(function(acumulador, atual){
    //se não for passado o primeiro parametro ele adimitira que é o elemnto de indice 0 e o valor atual iniciará no indide 1
    console.log(acumulador, atual);
    return acumulador + atual;
})

console.log(`Resultado da soma das notas: ${resultado}`)