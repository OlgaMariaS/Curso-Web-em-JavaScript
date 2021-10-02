//Notação ponto

let arredondar = Math.ceil(6.8);
console.log(arredondar);

const objeto = {}

objeto.brinquedo = "bola" //atributo
console.log(objeto.brinquedo); //acessa o atrbuto chamando o obj 

function publica (nome) {
    this.nome =  nome;//deixa atributo publico
}

const objeto2 = new publica("cadeira");
console.log(objeto2.nome); //acessou a função