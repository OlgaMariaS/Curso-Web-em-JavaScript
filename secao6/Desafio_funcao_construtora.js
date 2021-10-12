//Desafio é mostar a função construtora inspirando em classe

/* 
class nomes {
    constructor (nome){
        this.nome = nome;
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`);
    } //lembrando que this varia, ou seja dependendo do contexto dará indefinido ou outro valor a VARIAVEL NOME
}

const chamaClasse = new nomes ("Olga");
chamaClasse.falar(); */

//essa é a resposta da aula, não consegui fazer : (

function nomes(nome) {
    this.nome = nome;
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}
const chamaConstrutora = new nomes ("Olga");
chamaConstrutora.falar();