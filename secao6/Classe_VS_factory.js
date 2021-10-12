//Diferença entre classe e função

//classe
class nomes {
    constructor (nome){
        this.nome = nome;
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`);
    } //lembrando que this varia, ou seja dependendo do contexto dará indefinido ou outro valor a VARIAVEL NOME
}

const chamaClasse = new nomes ("Olga");
chamaClasse.falar();

//Função
const sobrenome = nome => {
    return {
        falar: () => console.log(`Meu sobrenome é ${nome}`)
    }
}
const chamaFuncao = sobrenome('Maria');
chamaFuncao.falar();
