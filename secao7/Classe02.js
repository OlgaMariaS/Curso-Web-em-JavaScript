//herança em classe
//todas as outras regras continuam iguais

class avo{
    constructor(sobrenome) {
        this.sobrenome =sobrenome;
    }
}
class pai extends avo { //extends = relação de prototype ou herança
    constructor(sobrenome, corCabelo = 'loiro'){
        super(sobrenome) //super, chama a SUPERCLASSE ou a classe acima, dentro de onde é chamado
        this.corCabelo = corCabelo;
    }
}

class Filho extends pai{
    constructor(){
        super('Gonçalves');
    }
}
const filho = new Filho;
console.log(filho);