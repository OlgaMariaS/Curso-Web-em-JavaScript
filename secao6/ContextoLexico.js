const meuNome = 'Olga'; //global

function imprimirNome(){
    console.log(meuNome); //buscou a variavel do escopo acima, pois ela sabe onde esta no codigo = contexto léxico
}

imprimirNome(); 

function imprimirNome2 (){
    const meuNome = "José"; //local 
    console.log(meuNome); //mesma regra pega o meuNome de dentro da função pois ela sabe onde esta definida e qual variavel mais proxima
}

imprimirNome2();