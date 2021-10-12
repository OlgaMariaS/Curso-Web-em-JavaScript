//Conceito de CLOSURE: é o escopo ou espaço em volta da função, criado quando a função é declarada
//Esse escopo permite que a função manipule as variaveis externas a ela

//Contexto Léxico em prática:
 const localDoCodigo = 'Global';

 function externo() {
    const localDoCodigo = "Local";
    
    return function interna() {
            return localDoCodigo;
            }

 }

 //busca a variavel de dentro de função porém se a const de externo sumir, impimirá na tela Global
const chamaFuncao = externo();
console.log(chamaFuncao());