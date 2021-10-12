//Sobre this e bind em arrow function

let comparaComThis = function (parametro) {
    console.log(this === parametro);
}

//objeto global = tudo é chamado de global
const objeto = {}
comparaComThis(global);
comparaComThis = comparaComThis.bind(objeto);
comparaComThis(objeto);

//Função Arrow

let comparaComThisArrow = parametros => console.log(this === parametros);
comparaComThisArrow(global);
comparaComThisArrow(module.exports); //modulo atual

comparaComThisArrow = comparaComThisArrow.bind(objeto);
comparaComThisArrow(objeto);
//bind não muda a arrow function