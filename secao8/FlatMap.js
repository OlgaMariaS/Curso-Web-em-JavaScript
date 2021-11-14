//FlatMap = metodo não oficial do js de CONCATENAR

const escola = [{
    nome:'1TAI',
        alunos: [{
            nome:'Bruna',
            nota:8.1
        },{
            nome:'Aracelly',
            nota:7.3
        }]
    },
    {
    nome: '2TAI',
        alunos: [{
            nome:'Thaynara',
            nota:6.1
        },{
            nome:'Maura',
            nota:9.2
    }]
}]

const getNotaAluno = alunos => alunos.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno);

const notas = escola.map(getNotasDaTurma);
console.log(notas);

//utilizando flatMap

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notasFlatMap = escola.flatMap(getNotasDaTurma);
console.log(notasFlatMap)