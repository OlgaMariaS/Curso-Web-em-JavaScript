/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false */

function bissexto(ano){
    let moduloPorQuatrocentos = ano % 400;
    let moduloPorQuatro = ano % 4; 
//Armazenado o resto das divisões por 4 e 400, se um dos resto for igual a zero, significa que o ano é divisivel, ou seja ele é bissexto

    if(moduloPorQuatrocentos == 0 || moduloPorQuatro == 0 ){
        console.log("É bissexto");
    }else{
        console.log("Não é bissexto");
    }
}
bissexto(2016);
bissexto(2014);

