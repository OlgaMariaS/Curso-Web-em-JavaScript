//Função termos usados: First-Class Object 
//Higher-order function, ou seja função pode se tratado como dado


//Função literal 
function literal() {

}

//Armazenar em variavel
const função = function (){

}
//Armazenar em array 
const array = [function(){}];

//Armazenar em atributo em objeto
const objeto = {}
objeto.meuNome = function (){
    return "Olga";
}

//Função como parametro de função
function correr (andar){
    andar()
}
correr(function () {console.log("ANDANDO")});

//Função pode conter função e retornar função
function soma (a, b){
    return function (c){
        console.log(a + b + c);
    }
}

soma(1,2)(3);