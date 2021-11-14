const alunos = [
    {nome:'Joana', nota: 7.3, bolsista:true},
    {nome:'Joane', nota: 6.7, bolsista:false},
    {nome:'Joani', nota: 8.1, bolsista:true},
    {nome:'Joano', nota: 9.4, bolsista:false},
    {nome:'Joanu', nota: 5.4, bolsista:false}
]

/*Desafio: *Todos os alunos são bolsistas? *Quais alunos são bolsistas?

const quemEBolsista = alunos.filter(function(alunos){
    return alunos.bolsista == true;
})
console.log(quemEBolsista);
*/
//*Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;

const resultado = alunos.map(alunos => alunos.bolsista).reduce(todosBolsistas)

console.log(resultado);
//*Quais alunos são bolsistas?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(alunos=>alunos.bolsista).reduce(algumBolsista));