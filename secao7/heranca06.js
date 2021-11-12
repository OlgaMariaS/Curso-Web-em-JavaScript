function aula (nome, video){
    this.nome = nome;
    this.video = video;

}

const aula1 = new aula('Bem vindo', 123);
const aula2 = new aula('Bem vindo', 456);
console.log(aula1, aula2);

//simulando uma função que faz o trabalho do NEW

function novo(parametro1,...parametros2){
//operador ...nomeDeAlgo ele concatena todos os parametros em um
    const obj = {}
    obj.__proto__ = parametro1.prototype
//disse que o objeto criado o prototype dele é igual ao primeiro paramtro
    parametro1.apply(obj, parametros2);

    return obj;
}

const aula3 = novo(aula,'Bem vindo', 789);
const aula4 = novo(aula,'Bem vindo', 000);