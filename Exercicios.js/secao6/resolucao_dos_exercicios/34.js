/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras*/


function comparandoPalavras(string1,string2){

    if(string1.length >= string2.length){
        var maiorString = string1;
    }else{
        var maiorString = string2;
    }

    for (let i = 0; i < maiorString.length; i++) {
        //char exemplo = string1.charAt(i); 
       
     }
}
comparandoPalavras('amor','AMor');